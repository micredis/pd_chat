package dplatonov.pd_chat.contoroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dplatonov.pd_chat.dto.UserDto;
import dplatonov.pd_chat.dto.validator.UserValidator;
import dplatonov.pd_chat.model.User;
import dplatonov.pd_chat.service.UserService;

@RestController
@RequestMapping("user")
public class UserController {
  private final UserService userService;
  private final UserValidator validator;

  @Autowired
  public UserController(UserService userService, UserValidator validator) {
    this.userService = userService;
    this.validator = validator;
  }

  @GetMapping("/users")
  public ResponseEntity<?> getUsers() {
    List<UserDto> users = userService.getUsers();
    return ResponseEntity.status(HttpStatus.OK).body(users);
  }

  @GetMapping("/user/{id}")
  public ResponseEntity<UserDto> getUser(@PathVariable("id") Long id) {
    return ResponseEntity.status(HttpStatus.OK).body(validator.validate(id));
  }

  @PutMapping
  public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
    validator.validate(userDto);
    userService.createUser(userDto);
    return ResponseEntity.status(HttpStatus.OK).body(userDto);
  }

  @DeleteMapping
  public ResponseEntity<?> deleteUser(@RequestBody UserDto userDto) {
    User user = validator.validate(userDto);
    userService.delete(user);
    return ResponseEntity.status(HttpStatus.OK).body(null);
  }

  @PutMapping("/update")
  public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto) {
    User existingUser = validator.validate(userDto);
    UserDto updatedUser = userService.updateUser(userDto, existingUser);
    return ResponseEntity.status(HttpStatus.OK).body(updatedUser);
  }
}
