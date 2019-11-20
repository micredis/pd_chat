package dplatonov.pd_chat.service;

import java.util.List;

import dplatonov.pd_chat.dto.UserDto;
import dplatonov.pd_chat.model.User;

public interface UserService {

  List<UserDto> getUsers();

  UserDto getUserById(Long id);

  UserDto createUser(UserDto userDto);

  UserDto getUserByEmail(String email);

  void delete(User user);

  UserDto updateUser(UserDto userDto, User existingUser);
}
