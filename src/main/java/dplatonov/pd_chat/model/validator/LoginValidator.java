package dplatonov.pd_chat.model.validator;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import dplatonov.pd_chat.dao.AccountDao;
import dplatonov.pd_chat.entity.User;
import dplatonov.pd_chat.model.GenericModel;

@Component
public class LoginValidator {
  private static final Logger log = LogManager.getLogger(LoginValidator.class);
  private final AccountDao dao;

  @Autowired
  public LoginValidator(AccountDao dao) {
    this.dao = dao;
  }

  public User validateUser(GenericModel<String, String> model) {
    validate(model);
    String login = model.getL();
    String password = model.getR();

    return dao.findByNameAndPassword(login, password);
  }

  private void validate(GenericModel login) {
    if (StringUtils.isEmpty(login.getL())) {
      log.error("LOGIN-VALIDATOR-001: login should be not empty!");
      throw new IllegalArgumentException();
    }

    if (StringUtils.isEmpty(login.getR())) {
      log.error("LOGIN-VALIDATOR-002: password should be not empty!");
      throw new IllegalArgumentException();
    }
  }
}
