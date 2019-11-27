package dplatonov.pd_chat.service;

import org.springframework.stereotype.Service;

import dplatonov.pd_chat.dto.UserDto;

@Service
public class AuthServiceImpl implements AuthService {

  @Override
  public UserDto createUser(UserDto userDto) {
    userDto.setRole("PARTICIPANT");
    return userDto;
  }
}
