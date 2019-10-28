package dplatonov.pd_chat.contoroller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dplatonov.pd_chat.exception.AuthorizationException;
import dplatonov.pd_chat.model.LoginDto;
import dplatonov.pd_chat.model.ResponseMessageDto;
import dplatonov.pd_chat.model.UserDto;
import dplatonov.pd_chat.model.validator.LoginValidator;

@RestController
public class AuthorizationController {
  private static final Logger log = LoggerFactory.getLogger(AuthorizationController.class);
  private final LoginValidator validator;

  @Autowired
  public AuthorizationController(LoginValidator validator) {
    this.validator = validator;
  }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody LoginDto loginDto) {
    UserDto userDto;
    try {
      userDto = validator.validate(loginDto);
      log.info("AUTHORIZATION-CONTROLLER-001: Login success");
      return ResponseEntity.status(HttpStatus.OK).body(userDto);
    } catch (AuthorizationException e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
          .body(new ResponseMessageDto(e.getMessage()));
    }
  }
}
