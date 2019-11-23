package dplatonov.pd_chat.service;

import java.util.List;

import dplatonov.pd_chat.dto.MessageDto;
import dplatonov.pd_chat.model.Message;

public interface MessageService {

  MessageDto createNew(MessageDto messageDto);

  List<MessageDto> getMessages(String email);

  Message getMessageById(Long id);

  void delete(Long id);
}
