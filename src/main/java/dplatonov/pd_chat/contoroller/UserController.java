package dplatonov.pd_chat.contoroller;

import dplatonov.pd_chat.model.UserDto;
import dplatonov.pd_chat.service.UserService;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
  private static final Logger log = LogManager.getLogger(UserController.class);
  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/users")
  public ResponseEntity<?> getUsers() {
    List<UserDto> users = userService.getUsers();
    return ResponseEntity.status(HttpStatus.OK).body(users);
  }

  @GetMapping("/user/{id}")
  public UserDto getUser(@PathVariable("id") Long id) {
    return userService.getUserById(id);
  }
}
