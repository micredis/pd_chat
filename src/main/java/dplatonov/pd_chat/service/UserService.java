package dplatonov.pd_chat.service;

import dplatonov.pd_chat.model.UserDto;
import java.util.List;

public interface UserService {

  List<UserDto> getUsers();

  UserDto getUserById(Long id);
}
