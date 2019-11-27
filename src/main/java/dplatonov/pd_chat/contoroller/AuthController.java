package dplatonov.pd_chat.contoroller;

import dplatonov.pd_chat.dto.UserDto;
import dplatonov.pd_chat.service.AuthService;
import dplatonov.pd_chat.service.UserService;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@Validated
public class AuthController {
  private static final Logger log = LoggerFactory.getLogger(AuthController.class);
  private final UserService userService;
  private final AuthService authService;

  @Autowired
  public AuthController(UserService userService, AuthService authService) {
    this.userService = userService;
    this.authService = authService;
  }

  @ResponseStatus(HttpStatus.OK)
  @PostMapping(value = "/login")
  public UserDto login() {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    String email = auth.getName();
    UserDto userDto = new UserDto(userService.getUserByEmail(email));
    log.info("AUTHORIZATION-CONTROLLER-OO1: Login is successful..");
    return userDto;
  }

  @ResponseStatus(HttpStatus.CREATED)
  @PutMapping("/registration")
  public UserDto registration(@Valid @RequestBody UserDto userDto) {
    UserDto modifiedUserDto = authService.createUser(userDto);
    UserDto newUserDto = userService.createUser(modifiedUserDto);
    log.info("AUTHORIZATION-CONTROLLER-OO2: Registration is successful..");
    return newUserDto;
  }
}
