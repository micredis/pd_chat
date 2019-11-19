package dplatonov.pd_chat.dto.validator;

import dplatonov.pd_chat.dao.UserDao;
import dplatonov.pd_chat.model.User;
import dplatonov.pd_chat.dto.UserDto;
import java.util.Objects;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
public class UserValidator {
  private static final Logger log = LogManager.getLogger(UserValidator.class);
  private final UserDao dao;

  @Autowired
  public UserValidator(UserDao dao) {
    this.dao = dao;
  }

  public void validate(UserDto userDto) {
    String email = userDto.getEmail();
    String password = userDto.getPassword();
    if (StringUtils.isEmpty(email)) {
      log.error("USER-VALIDATOR-001: Field email is empty!");
      throw new IllegalArgumentException();
    } else if (StringUtils.isEmpty(password)) {
      log.error("USER-VALIDATOR-002: Field password is empty!");
      throw new IllegalArgumentException();
    }

    User user = dao.findByEmail(email);
    if (Objects.isNull(user)) {
      log.error("USER-VALIDATOR-003: User with this email is exist, change email and try again!");
      throw new IllegalArgumentException();
    }
  }
}
