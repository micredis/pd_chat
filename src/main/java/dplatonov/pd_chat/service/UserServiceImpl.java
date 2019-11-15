package dplatonov.pd_chat.service;

import dplatonov.pd_chat.dao.UserDao;
import dplatonov.pd_chat.entity.User;
import dplatonov.pd_chat.model.UserDto;
import java.util.List;
import java.util.stream.Collectors;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
  private static final Logger log = LogManager.getLogger(UserServiceImpl.class);
  private final UserDao userDao;
  private final BCryptPasswordEncoder passwordEncoder;

  @Autowired
  public UserServiceImpl(UserDao userDao, BCryptPasswordEncoder passwordEncoder) {
    this.userDao = userDao;
    this.passwordEncoder = passwordEncoder;
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
            passwordEncoder.encode(userDto.getPassword()),
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
    userDao.save(user);
    log.info("USER-SERVICE-003: Create user is complete");
  }
}
