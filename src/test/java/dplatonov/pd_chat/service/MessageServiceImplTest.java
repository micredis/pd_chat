package dplatonov.pd_chat.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

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

import dplatonov.pd_chat.dao.MessageDao;
import dplatonov.pd_chat.dto.MessageDto;
import dplatonov.pd_chat.model.Message;
import dplatonov.pd_chat.model.MessageBuilder;
import dplatonov.pd_chat.model.User;

@ExtendWith(MockitoExtension.class)
class MessageServiceImplTest {
  private MessageService spy;
  @Mock private MessageDao mockMessageDao;
  @Mock private UserService mockUserService;

  @BeforeEach
  void setUp() {
    spy = Mockito.spy(new MessageServiceImpl(mockMessageDao, mockUserService));
  }

  @DisplayName("Given MessageDto Then save message And return MessageDTO")
  @Test
  void createNew(@Mock User mockUser, @Mock MessageDto mockMessageDto) {
    Message message =
        new MessageBuilder().setDestination(mockUser).setOwner(mockUser).createMessage();
    when(mockUserService.getUserByEmail(mockMessageDto.getOwnerEmail())).thenReturn(mockUser);
    when(mockMessageDao.save(any())).thenReturn(message);
    MessageDto result = spy.createNew(mockMessageDto);
    assertEquals(message.getId(), result.getId());
  }

  @DisplayName("Given email Then return MessageDto")
  @Test
  void getMessages(@Mock User mockUser) {
    Message message =
        new MessageBuilder().setDestination(mockUser).setOwner(mockUser).createMessage();
    List<Message> messages = Collections.singletonList(message);
    when(mockMessageDao.findAll()).thenReturn(messages);
    String email = "test@test.com";
    List<MessageDto> result = spy.getMessages(email);
    int size = messages.size();
    assertEquals(size, result.size());
    IntStream.range(0, size)
        .forEach(i -> assertEquals(messages.get(i).getId(), result.get(i).getId()));
  }

  @DisplayName("Given id Then return Message")
  @Test
  void getMessageById(@Mock User mockUser) {
    Long id = 1L;
    Message message =
        new MessageBuilder().setDestination(mockUser).setOwner(mockUser).createMessage();
    when(mockMessageDao.findById(id)).thenReturn(Optional.of(message));
    Message result = spy.getMessageById(id);
    assertEquals(message.getId(), result.getId());
  }

  @DisplayName("Given id Then mark message as deleted")
  @Test
  void delete(@Mock User mockUser) {
    Long id = 1L;
    Message message =
        new MessageBuilder().setDestination(mockUser).setOwner(mockUser).createMessage();
    when(mockMessageDao.findById(id)).thenReturn(Optional.of(message));
    spy.delete(id);
    verify(mockMessageDao).save(message);
  }

  @DisplayName("Given id When retrieve message Then trow IllegalArgumentException")
  @Test
  void getMessageById1() {
    Long id = 1L;
    when(mockMessageDao.findById(id)).thenReturn(Optional.empty());
    assertThrows(IllegalArgumentException.class, () -> spy.getMessageById(id));
  }
}
