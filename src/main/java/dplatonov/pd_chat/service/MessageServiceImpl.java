package dplatonov.pd_chat.service;

import org.springframework.stereotype.Service;

import dplatonov.pd_chat.dto.MessageDto;

@Service
public class MessageServiceImpl implements MessageService {

  @Override
  public MessageDto getMessagesEmail(String email) {
    return null;
  }

  @Override
  public MessageDto getMessageById(Long id) {
    return null;
  }

  @Override
  public void delete(Long id) {

  }
}
