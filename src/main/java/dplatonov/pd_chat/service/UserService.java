package dplatonov.pd_chat.service;

import dplatonov.pd_chat.dto.UserDto;
import dplatonov.pd_chat.model.User;
import java.util.List;

public interface UserService {

  List<UserDto> getUsers();

  User getUserById(Long id);

  UserDto createUser(UserDto userDto);

  User getUserByEmail(String email) throws IllegalArgumentException;

  void delete(List<UserDto> userDtos);

  UserDto updateUser(UserDto userDto);
}
