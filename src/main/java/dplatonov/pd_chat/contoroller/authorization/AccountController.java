package dplatonov.pd_chat.contoroller.authorization;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dplatonov.pd_chat.entity.User;
import dplatonov.pd_chat.model.GenericModel;
import dplatonov.pd_chat.model.validator.LoginValidator;

@RestController
@RequestMapping("/login")
public class AccountController {
  private final LoginValidator loginValidator;

  @Autowired
  public AccountController(LoginValidator loginValidator) {
    this.loginValidator = loginValidator;
  }

  @PostMapping
  public void login(@RequestBody GenericModel<String, String> login) {
    User user = loginValidator.validateUser(login);
    if (Objects.isNull(user)){
      //TODO redirect to sign up page
    }
  }
}
