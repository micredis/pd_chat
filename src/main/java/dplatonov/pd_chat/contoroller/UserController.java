package dplatonov.pd_chat.contoroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import dplatonov.pd_chat.annotation.Admin;
import dplatonov.pd_chat.dto.UserDto;
import dplatonov.pd_chat.model.User;
import dplatonov.pd_chat.service.UserService;
import dplatonov.pd_chat.validator.UserValidator;

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

  @Admin
  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/list")
  public List<UserDto> getUsers() {
    return userService.getUsers();
  }

  @Admin
  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/{id}")
  public UserDto getUser(@PathVariable("id") Long id) {
    return validator.validate(id);
  }

  @Admin
  @ResponseStatus(HttpStatus.CREATED)
  @PutMapping
  public UserDto createUser(@RequestBody UserDto userDto) {
    validator.validate(userDto);
    userService.createUser(userDto);
    return userDto;
  }

  @Admin
  @ResponseStatus(HttpStatus.OK)
  @DeleteMapping
  public void deleteUser(@RequestBody UserDto userDto) {
    User user = validator.validate(userDto);
    userService.delete(user);
  }

  @Admin
  @ResponseStatus(HttpStatus.OK)
  @PutMapping("/update")
  public UserDto updateUser(@RequestBody UserDto userDto) {
    User existingUser = validator.validate(userDto);
    return userService.updateUser(userDto, existingUser);
  }
}
