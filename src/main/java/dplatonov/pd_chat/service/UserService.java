package dplatonov.pd_chat.service;

import dplatonov.pd_chat.entity.User;
import dplatonov.pd_chat.model.UserDto;
import java.util.List;

public interface UserService {

  List<UserDto> getUsers();

  UserDto getUserById(Long id);

  void createUser(UserDto userDto);

  User findUserByEmail(String email);

  void saveUser(User user);
}
