package dplatonov.pd_chat.service;

import dplatonov.pd_chat.dao.UserDao;
import dplatonov.pd_chat.entity.User;
import dplatonov.pd_chat.model.UserDto;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
  private final UserDao userDao;

  @Autowired
  public UserServiceImpl(UserDao userDao) {
    this.userDao = userDao;
  }

  @Override
  public List<UserDto> getUsers() {
    List<User> users = (List<User>) userDao.findAll();
    return users.stream().map(UserDto::new).collect(Collectors.toList());
  }

  @Override
  public UserDto getUserById(Long id) {
    User user = userDao.findById(id).get();
    return new UserDto(user);
  }
}
