package dplatonov.pd_chat.service;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import dplatonov.pd_chat.dao.UserDao;
import dplatonov.pd_chat.dto.UserDto;
import dplatonov.pd_chat.model.Role;
import dplatonov.pd_chat.model.User;
import dplatonov.pd_chat.model.UserBuilder;

@Service
public class UserServiceImpl implements UserService {
  private static final Logger log = LogManager.getLogger(UserServiceImpl.class);
  private final UserDao userDao;
  private final BCryptPasswordEncoder encoder;
  private final RoleService roleService;

  @Autowired
  public UserServiceImpl(UserDao userDao, BCryptPasswordEncoder encoder, RoleService roleService) {
    this.userDao = userDao;
    this.encoder = encoder;
    this.roleService = roleService;
  }

  @Override
  public List<UserDto> getUsers() {
    List<User> users = userDao.findAll();
    return users.stream().map(UserDto::new).collect(Collectors.toList());
  }

  @Override
  public User getUserById(Long id) {
    return userDao
        .findById(id)
        .orElseGet(
            () -> {
              String errorMessage = "User with id = " + id + " doesn't exist!";
              log.error("USER-SERVICE-002: " + errorMessage);
              throw new IllegalArgumentException(errorMessage);
            });
  }

  @Override
  public UserDto createUser(UserDto userDto) {
    Role role = roleService.getRole(userDto.getRole());
    log.info(
        "USER-SERVICE-004: Start create user with email "
            + userDto.getEmail()
            + " and role "
            + role.getRole());
    User user =
        new UserBuilder()
            .setId(userDto.getId())
            .setFullName(userDto.getFullName())
            .setLogin(userDto.getLogin())
            .setEmail(userDto.getEmail())
            .setPassword(encoder.encode(userDto.getPassword()))
            .setRole(role)
            .createUser();
    userDao.save(user);
    log.info("USER-SERVICE-001: Create user is complete");
    return new UserDto(user);
  }

  @Override
  public User getUserByEmail(String email) {
    User user =
        userDao
            .findByEmailAndActive(email, true)
            .orElseGet(
                () -> {
                  String errorMessage =
                      "User with email " + email + " does not exist or not active";
                  log.error("USER-SERVICE-008: " + errorMessage);
                  throw new IllegalArgumentException(errorMessage);
                });
    log.info("USER-SERVICE-003: Retrieve user with email " + email + " from Postgres");
    return user;
  }

  @Override
  public void delete(Long id) {
    User user = getUserById(id);
    log.info("USER-SERVICE-004: Start delete user with id " + user.getId());
    user.setActive(false);
    userDao.save(user);
    log.info("USER-SERVICE-005: Delete user with id " + user.getId() + " is complete");
  }

  @Override
  public UserDto updateUser(UserDto userDto) {
    User existingUser = getUserById(userDto.getId());
    log.info("USER-SERVICE-006: Start update user with id " + userDto.getId());
    User user =
        new UserBuilder()
            .setId(userDto.getId())
            .setFullName(userDto.getFullName())
            .setLogin(userDto.getLogin())
            .setEmail(userDto.getEmail())
            .setPassword(userDto.getPassword())
            .setRole(existingUser.getRole())
            .createUser();
    User result = userDao.save(user);
    log.info("USER-SERVICE-007: Update user with id " + userDto.getId() + " is complete");
    return new UserDto(result);
  }
}
