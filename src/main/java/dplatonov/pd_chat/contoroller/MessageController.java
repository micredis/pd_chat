package dplatonov.pd_chat.contoroller;

import dplatonov.pd_chat.annotation.Admin;
import dplatonov.pd_chat.annotation.Participant;
import dplatonov.pd_chat.dto.MessageDto;
import dplatonov.pd_chat.service.MessageService;
import java.util.List;
import javax.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/message")
@Validated
public class MessageController {
  private final MessageService messageService;

  @Autowired
  public MessageController(MessageService messageService) {
    this.messageService = messageService;
  }

  @Participant
  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/list")
  public List<MessageDto> getMessagesForAuthUser() {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    String email = auth.getName();
    return messageService.getMessages(email);
  }

  @Admin
  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/list/{id}")
  public MessageDto getMessageById(@PathVariable("id") @Min(1) Long id) {
    return new MessageDto(messageService.getMessageById(id));
  }

  @Admin
  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/all")
  public List<MessageDto> getAllMessages() {
    return messageService.getMessages();
  }

  @ResponseStatus(HttpStatus.CREATED)
  @PutMapping("/create")
  public MessageDto createMessage(@RequestBody MessageDto messageDto) {
    return messageService.createNew(messageDto);
  }

  @ResponseStatus(HttpStatus.OK)
  @DeleteMapping("/{id}")
  public void deleteMessage(@PathVariable("id") @Min(1) Long id) {
    messageService.delete(id);
  }
}
