package dplatonov.pd_chat.service;

import dplatonov.pd_chat.dto.UserDto;

public interface AuthService {
  UserDto createUser(UserDto userDto);

}
