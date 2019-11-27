package dplatonov.pd_chat.service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

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
    isAdmin(id);
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
    String email = userDto.getEmail();
    isExist(email);
    log.info("USER-SERVICE-004: Start create user with email " + email + " and role PARTICIPANT");
    Role role = roleService.getRole(userDto.getRole());
    if (Objects.isNull(role)) {
      String errorMessage = "Role isn't correct";
      log.error("USER-SERVICE-010: " + errorMessage);
      throw new IllegalArgumentException(errorMessage);
    }
    User user =
        new UserBuilder()
            .setFullName(userDto.getFullName())
            .setLogin(userDto.getLogin())
            .setEmail(email)
            .setPassword(encoder.encode(userDto.getPassword()))
            .setRole(role)
            .setIsActive(true)
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
  public void delete(List<UserDto> userDtos) {
    List<Long> ids = userDtos.stream().map(UserDto::getId).collect(Collectors.toList());
    List<User> allById = userDao.findAllById(ids);
    if (CollectionUtils.isEmpty(allById) || !Objects.equals(userDtos.size(), allById.size())) {
      String errorMessage = "Som of selected users does not exist";
      log.error("USER-SERVICE-011: " + errorMessage);
      throw new IllegalArgumentException(errorMessage);
    }
    allById.forEach(
        user -> {
          Long id = user.getId();
          isAdmin(id);
          user.setActive(false);
        });
    String message =
        allById.stream()
            .map(User::getId)
            .map(String::valueOf)
            .map(s -> ", ")
            .collect(Collectors.joining());
    log.info("USER-SERVICE-004: Start delete user with id's " + message);
    userDao.saveAll(allById);
    log.info("USER-SERVICE-005: Delete user with id's " + message + " is complete");
  }

  @Override
  public UserDto updateUser(UserDto userDto) {
    Long id = userDto.getId();
    isAdmin(id);
    User existingUser = getUserById(id);
    log.info("USER-SERVICE-006: Start update user with id " + id);
    User user =
        new UserBuilder()
            .setId(id)
            .setFullName(userDto.getFullName())
            .setLogin(userDto.getLogin())
            .setEmail(userDto.getEmail())
            .setPassword(userDto.getPassword())
            .setRole(existingUser.getRole())
            .createUser();
    User result = userDao.save(user);
    log.info("USER-SERVICE-007: Update user with id " + id + " is complete");
    return new UserDto(result);
  }

  private void isAdmin(Long id) {
    if (Objects.isNull(id) || Objects.equals(id, 1L)) {
      String errorMessage = "User can't be modified";
      log.error("USER-SERVICE-OO8: " + errorMessage);
      throw new IllegalArgumentException(errorMessage);
    }
  }

  private void isExist(String email) {
    boolean present = userDao.findByEmail(email).isPresent();
    if (present) {
      String errorMessage = "User with email " + email + " is exist";
      log.error("USER-SERVICE-009: " + errorMessage);
      throw new IllegalArgumentException(errorMessage);
    }
  }
}
