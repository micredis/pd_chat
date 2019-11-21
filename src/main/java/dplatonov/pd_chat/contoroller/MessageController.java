package dplatonov.pd_chat.contoroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dplatonov.pd_chat.annotation.Admin;
import dplatonov.pd_chat.dto.MessageDto;
import dplatonov.pd_chat.model.Message;
import dplatonov.pd_chat.service.MessageService;
import dplatonov.pd_chat.validator.MessageValidator;

@RestController
@RequestMapping("/message")
public class MessageController {
  private final MessageService messageService;
  private final MessageValidator validator;

  @Autowired
  public MessageController(MessageService messageService, MessageValidator validator) {
    this.messageService = messageService;
    this.validator = validator;
  }

  @GetMapping("/list")
  public ResponseEntity<?> getMessages() {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    String email = auth.getName();
    MessageDto messageDto = messageService.getMessagesEmail(email);
    return ResponseEntity.status(HttpStatus.OK).body(messageDto);
  }

  @Admin
  @GetMapping("/list/{id}")
  public ResponseEntity<MessageDto> getMessageById(@PathVariable("id") Long id) {
    Message message = validator.validate(id);
    return ResponseEntity.status(HttpStatus.OK).body(new MessageDto(message));
  }

  @Admin
  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteMessage(@PathVariable("id") Long id) {
    messageService.delete(id);
    return ResponseEntity.status(HttpStatus.OK).build();
  }
}
