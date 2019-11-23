package dplatonov.pd_chat.contoroller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
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
import dplatonov.pd_chat.service.UserService;

@RestController
@RequestMapping("user")
@Validated
public class UserController {
  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
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
    return new UserDto(userService.getUserById(id));
  }

  @Admin
  @ResponseStatus(HttpStatus.CREATED)
  @PutMapping
  public UserDto createUser(@Valid @RequestBody UserDto userDto) {
    return userDto;
  }

  @Admin
  @ResponseStatus(HttpStatus.OK)
  @DeleteMapping
  public void deleteUser(@Valid @RequestBody UserDto userDto) {
    userService.delete(userDto);
  }

  @Admin
  @ResponseStatus(HttpStatus.OK)
  @PutMapping("/update")
  public UserDto updateUser(@Valid @RequestBody UserDto userDto) {
    return userService.updateUser(userDto);
  }
}
