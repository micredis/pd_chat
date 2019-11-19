package dplatonov.pd_chat.dto.validator;

import dplatonov.pd_chat.dao.UserDao;
import dplatonov.pd_chat.model.User;
import dplatonov.pd_chat.exception.AuthorizationException;
import dplatonov.pd_chat.dto.LoginDto;
import dplatonov.pd_chat.dto.UserDto;
import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
public class LoginValidator {
  private static final Logger log = LoggerFactory.getLogger(LoginValidator.class);
  private final UserDao userDao;

  @Autowired
  public LoginValidator(UserDao userDao) {
    this.userDao = userDao;
  }

  public UserDto validate(LoginDto loginDto) throws AuthorizationException {
    String login = loginDto.getLogin();
    String password = loginDto.getPassword();
    validateFields(login, password);
    User user = retrieveUser(login, password);

    return new UserDto(user);
  }

  private User retrieveUser(String login, String password) throws AuthorizationException {
    User user = userDao.findByEmailAndPassword(login, password);
    if (Objects.isNull(user)) {
      String message = "User is not exist!";
      log.info("LOGIN-VALIDATOR-OO3: " + message);
      throw new AuthorizationException(message);
    }

    return user;
  }

  private void validateFields(String login, String password) {
    if (StringUtils.isEmpty(login)) {
      log.error("LOGIN-VALIDATOR-001: Login can't be empty!");
      throw new IllegalArgumentException();
    } else if (StringUtils.isEmpty(password)) {
      log.error("LOGIN-VALIDATOR-002: Password can't be empty!");
      throw new IllegalArgumentException();
    }
  }
}
