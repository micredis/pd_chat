package dplatonov.pd_chat.service;

import dplatonov.pd_chat.dao.MessageDao;
import dplatonov.pd_chat.dto.MessageDto;
import dplatonov.pd_chat.model.Message;
import dplatonov.pd_chat.model.MessageBuilder;
import dplatonov.pd_chat.model.User;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

@Service
public class MessageServiceImpl implements MessageService {
  private static final Logger log = LogManager.getLogger(MessageServiceImpl.class);
  private final MessageDao dao;
  private final UserService userService;

  @Autowired
  public MessageServiceImpl(MessageDao dao, UserService userService) {
    this.dao = dao;
    this.userService = userService;
  }

  @Transactional
  @Override
  public MessageDto createNew(MessageDto messageDto) {
    if (StringUtils.isEmpty(messageDto.getTitle())) {
      messageDto.setTitle("Untitled");
    }
    User destinationUser = userService.getUserByEmail(messageDto.getTo());
    User owner = userService.getUserByEmail(messageDto.getFrom());
    Message message =
        new MessageBuilder()
            .setId(messageDto.getId())
            .setTo(destinationUser)
            .setFrom(owner)
            .setTitle(messageDto.getTitle())
            .setMessage(messageDto.getMessage())
            .setIsDeleted(false)
            .createMessage();
    log.info("MESSAGE-SERVICE-001: Start save new message");
    Message result = dao.save(message);
    log.info("MESSAGE-SERVICE-002: Save new message is complete");
    return new MessageDto(result);
  }

  @Override
  public List<MessageDto> getMessages(String email) {
    List<Message> all = dao.findByFromEmail(email);
    if (CollectionUtils.isEmpty(all)) {
      log.info("MESSAGE-SERVICE-007: User with email " + email + " does not have any messages");
      return Collections.emptyList();
    }
    List<MessageDto> messages = all.stream().map(MessageDto::new).collect(Collectors.toList());
    messages.forEach(dto -> dto.setTo(null));
    log.info("MESSAGE-SERVICE-003: Retrieve list of messages from Postgres");
    return messages;
  }

  @Override
  public Message getMessageById(Long id) {
    Message message =
        dao.findById(id)
            .orElseGet(
                () -> {
                  String errorMessage = "Message with id " + id + " does not exist";
                  log.error("MESSAGE-SERVICE-004: " + errorMessage);
                  throw new IllegalArgumentException(errorMessage);
                });
    log.info("MESSAGE-SERVICE-003: Retrieve message with id " + id + " from Postgres");
    return message;
  }

  @Override
  public void delete(Long id) {
    log.info("MESSAGE-SERVICE-005: Start delete message");
    Message message = getMessageById(id);
    message.setDeleted(true);
    dao.save(message);
    log.info("MESSAGE-SERVICE-006: Delete message is complete");
  }

  @Override
  public List<MessageDto> getMessages() {
    List<Message> messages = dao.findAll();
    return messages.stream().map(MessageDto::new).collect(Collectors.toList());
  }
}
