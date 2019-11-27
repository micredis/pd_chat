package dplatonov.pd_chat.service;

import dplatonov.pd_chat.dto.UserDto;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

  @Override
  public UserDto createUser(UserDto userDto) {
    userDto.setRole("PARTICIPANT");
    return userDto;
  }
}
