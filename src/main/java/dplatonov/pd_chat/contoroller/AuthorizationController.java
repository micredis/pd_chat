package dplatonov.pd_chat.contoroller;

import dplatonov.pd_chat.entity.User;
import dplatonov.pd_chat.entity.UserBuilder;
import dplatonov.pd_chat.exception.AuthorizationException;
import dplatonov.pd_chat.model.LoginDto;
import dplatonov.pd_chat.model.ResponseMessageDto;
import dplatonov.pd_chat.model.UserDto;
import dplatonov.pd_chat.model.validator.LoginValidator;
import dplatonov.pd_chat.service.UserService;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class AuthorizationController {
  private static final Logger log = LoggerFactory.getLogger(AuthorizationController.class);
  private final LoginValidator validator;
  private final UserService userService;

  @Autowired
  public AuthorizationController(LoginValidator validator, UserService userService) {
    this.validator = validator;
    this.userService = userService;
  }

  @GetMapping(value = {"/", "/login"})
  public ModelAndView login() {
    ModelAndView modelAndView = new ModelAndView();
    modelAndView.setViewName("login");
    return modelAndView;
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

  @GetMapping("/registration")
  public ModelAndView registration() {
    ModelAndView modelAndView = new ModelAndView();
    User user = new UserBuilder().createUser();
    modelAndView.addObject("user", user);
    modelAndView.setViewName("registration");
    return modelAndView;
  }

  @PostMapping("/registration")
  public ModelAndView createNewUser(@Valid User user, BindingResult bindingResult) {
    ModelAndView modelAndView = new ModelAndView();
    User userExists = userService.findUserByEmail(user.getEmail());
    if (userExists != null) {
      bindingResult.rejectValue(
          "email", "error.user", "There is already a user registered with the email provided");
    }
    if (bindingResult.hasErrors()) {
      modelAndView.setViewName("registration");
    } else {
      userService.saveUser(user);
      modelAndView.addObject("successMessage", "User has been registered successfully");
      modelAndView.addObject("user", new UserBuilder().createUser());
      modelAndView.setViewName("registration");
    }
    return modelAndView;
  }

  @GetMapping("/admin/home")
  public ModelAndView home() {
    ModelAndView modelAndView = new ModelAndView();
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    User user = userService.findUserByEmail(auth.getName());
    modelAndView.addObject("userName", "Welcome " + user.getEmail());
    modelAndView.addObject("adminMessage", "Content Available Only for Users with Admin Role");
    modelAndView.setViewName("admin/home");
    return modelAndView;
  }
}
