package dplatonov.pd_chat.service;

import java.util.List;

import dplatonov.pd_chat.dto.UserDto;
import dplatonov.pd_chat.model.User;

public interface UserService {

  List<UserDto> getUsers();

  User getUserById(Long id);

  UserDto createUser(UserDto userDto);

  User getUserByEmail(String email);

  void delete(Long id);

  UserDto updateUser(UserDto userDto);
}
