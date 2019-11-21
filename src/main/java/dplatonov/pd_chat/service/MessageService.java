package dplatonov.pd_chat.service;

import dplatonov.pd_chat.dto.MessageDto;

public interface MessageService {

  MessageDto getMessagesEmail(String email);

  MessageDto getMessageById(Long id);

  void delete(Long id);
}
