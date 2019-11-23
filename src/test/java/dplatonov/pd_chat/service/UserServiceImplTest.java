package dplatonov.pd_chat.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import dplatonov.pd_chat.dao.UserDao;
import dplatonov.pd_chat.dto.UserDto;
import dplatonov.pd_chat.model.Role;
import dplatonov.pd_chat.model.User;
import dplatonov.pd_chat.model.UserBuilder;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {
  private UserService spy;
  @Mock private UserDao mockUserDao;
  @Mock private BCryptPasswordEncoder mockEncoder;
  @Mock private RoleService mockRoleService;

  @BeforeEach
  void setUp() {
    spy = Mockito.spy(new UserServiceImpl(mockUserDao, mockEncoder, mockRoleService));
  }

  @DisplayName("Return list of users")
  @Test
  void getUsers(@Mock Role mockRole) {
    User user = new UserBuilder().setRole(mockRole).createUser();
    List<User> users = Collections.singletonList(user);
    when(mockUserDao.findAll()).thenReturn(users);
    List<UserDto> result = spy.getUsers();
    int size = users.size();
    IntStream.range(0, size)
        .forEach(i -> assertEquals(users.get(i).getId(), result.get(i).getId()));
  }

  @DisplayName("Given id Then return user When positive scenario")
  @Test
  void getUserById(@Mock Role mockRole) {
    Long id = 1L;
    User user = new UserBuilder().setRole(mockRole).createUser();
    when(mockUserDao.findById(id)).thenReturn(Optional.of(user));
    User result = spy.getUserById(id);
    assertEquals(user.getId(), result.getId());
  }

  @DisplayName("Given id Then return user When negative scenario")
  @Test
  void getUserById1(@Mock Role mockRole) {
    Long id = 1L;
    when(mockUserDao.findById(id)).thenReturn(Optional.empty());
    assertThrows(IllegalArgumentException.class, () -> spy.getUserById(id));
  }

  @DisplayName("Given UserDto Then create an User")
  @Test
  void createUser(@Mock Role mockRole, @Mock UserDto mockUserDto) {
    User user = new UserBuilder().setRole(mockRole).createUser();
    when(mockRoleService.getRole(any())).thenReturn(mockRole);
    when(mockUserDao.save(any())).thenReturn(user);
    UserDto result = spy.createUser(mockUserDto);
    assertEquals(mockUserDto.getId(), result.getId());
  }

  @DisplayName("Given email Then return User When positive scenario")
  @Test
  void getUserByEmail(@Mock Role mockRole) {
    User user = new UserBuilder().setRole(mockRole).createUser();
    String email = "test@test.com";
    when(mockUserDao.findByEmailAndActive(email, true)).thenReturn(Optional.of(user));
    User result = spy.getUserByEmail(email);
    assertEquals(user.getId(), result.getId());
  }

  @DisplayName("Given id Then delete message When positive scenario")
  @Test
  void delete(@Mock Role mockRole) {
    Long id = 1L;
    User user = new UserBuilder().setRole(mockRole).createUser();
    when(mockUserDao.findById(id)).thenReturn(Optional.of(user));
    spy.delete(id);
    verify(mockUserDao).save(user);
  }

  @DisplayName("Given id Then delete message When negative scenario")
  @Test
  void delete1() {
    Long id = 1L;
    when(mockUserDao.findById(id)).thenReturn(Optional.empty());
    assertThrows(IllegalArgumentException.class, () -> spy.delete(id));
  }

  @DisplayName("Given UserDto Then return new UserDto When positive scenario")
  @Test
  void updateUser(@Mock Role mockRole) {
    Long id = 1L;
    User user = new UserBuilder().setId(id).setRole(mockRole).createUser();
    when(mockUserDao.findById(any())).thenReturn(Optional.of(user));
    when(mockUserDao.save(any())).thenReturn(user);
    UserDto userDto = new UserDto(user);
    UserDto result = spy.updateUser(userDto);
    assertEquals(id, result.getId());
  }

  @DisplayName("Given UserDto Then return new UserDto When negative scenario")
  @Test
  void updateUser1() {
    Long id = 1L;
    when(mockUserDao.findById(id)).thenReturn(Optional.empty());
    assertThrows(IllegalArgumentException.class, () -> spy.delete(id));
  }

  @DisplayName("Given email Then return User When negative scenario")
  @Test
  void testGetUserByEmail() {
    String email = "test@test.com";
    when(mockUserDao.findByEmailAndActive(email, true)).thenReturn(Optional.empty());
    assertThrows(IllegalArgumentException.class, () -> spy.getUserByEmail(email));
  }
}
