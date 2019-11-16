package dplatonov.pd_chat.service;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import dplatonov.pd_chat.dao.RoleDao;
import dplatonov.pd_chat.dao.UserDao;
import dplatonov.pd_chat.entity.Role;
import dplatonov.pd_chat.entity.User;
import dplatonov.pd_chat.enums.RoleEnum;
import dplatonov.pd_chat.model.UserDto;

@Service
public class UserServiceImpl implements UserService {
  private static final Logger log = LogManager.getLogger(UserServiceImpl.class);
  private final UserDao userDao;
  private final RoleDao roleDao;
  private final BCryptPasswordEncoder encoder;

  @Autowired
  public UserServiceImpl(UserDao userDao, RoleDao roleDao, BCryptPasswordEncoder encoder) {
    this.userDao = userDao;
    this.roleDao = roleDao;
    this.encoder = encoder;
  }

  @Override
  public List<UserDto> getUsers() {
    List<User> users = userDao.findAll();
    return users.stream().map(UserDto::new).collect(Collectors.toList());
  }

  @Override
  public UserDto getUserById(Long id) {
    User user =
        userDao
            .findById(id)
            .orElseGet(
                () -> {
                  log.error("USER-SERVICE-002: User with id = " + id + " doesn't exist!");
                  return new User();
                });
    return new UserDto(user);
  }

  @Override
  public void createUser(UserDto userDto) {
    User user =
        new User(
            userDto.getId(),
            userDto.getEmail(),
            encoder.encode(userDto.getPassword()),
            userDto.getDescription());
    userDao.save(user);
    log.info("USER-SERVICE-001: Create user is complete");
  }

  @Override
  public User findUserByEmail(String email) {
    return userDao.findByEmail(email);
  }

  @Override
  public void saveUser(User user) {
    user.setPassword(encoder.encode(user.getPassword()));
    Role role = roleDao.findByRole(RoleEnum.getRoleEnum(RoleEnum.ADMIN));
    user.setRole(role);
    user.setActive(true);
    userDao.save(user);
    log.info("USER-SERVICE-003: Create user is complete");
  }
}
