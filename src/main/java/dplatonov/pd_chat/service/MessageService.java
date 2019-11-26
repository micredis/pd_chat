package dplatonov.pd_chat.service;

import dplatonov.pd_chat.dto.MessageDto;
import dplatonov.pd_chat.model.Message;
import java.util.List;

public interface MessageService {

  MessageDto createNew(MessageDto messageDto);

  List<MessageDto> getMessages(String email);

  Message getMessageById(Long id);

  void delete(Long id);

  List<MessageDto> getMessages();
}
