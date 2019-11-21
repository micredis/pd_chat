package dplatonov.pd_chat.contoroller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dplatonov.pd_chat.dto.UserDto;
import dplatonov.pd_chat.service.UserService;
import dplatonov.pd_chat.validator.UserValidator;

@RestController
@CrossOrigin
public class AuthorizationController {
  private static final Logger log = LoggerFactory.getLogger(AuthorizationController.class);
  private final UserService userService;
  private final UserValidator validator;

  @Autowired
  public AuthorizationController(UserService userService, UserValidator validator) {
    this.userService = userService;
    this.validator = validator;
  }

  @PostMapping(value = "/login")
  public ResponseEntity<UserDto> login() {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    String email = auth.getName();
    UserDto userDto = userService.getUserByEmail(email);
    log.info("AUTHORIZATION-CONTROLLER-OO1: Login is successful..");
    return ResponseEntity.status(HttpStatus.OK).body(userDto);
  }

  @PostMapping("/registration")
  public ResponseEntity<UserDto> registration(@RequestBody UserDto userDto) {
    validator.validate(userDto);
    UserDto newUserDto = userService.createUser(userDto);
    log.info("AUTHORIZATION-CONTROLLER-OO2: Registration is successful..");
    return ResponseEntity.status(HttpStatus.OK).body(newUserDto);
  }
}
