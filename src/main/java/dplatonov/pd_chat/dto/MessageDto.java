package dplatonov.pd_chat.dto;

import dplatonov.pd_chat.model.Message;
import java.util.Date;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

public class MessageDto {
  @Null private Long id;
  @NotNull(message = "Email address To cannot be empty")
  private String to;
  @NotNull(message = "Email address From cannot be empty")
  private String from;
  private Date createDate;
  private String title;
  private String message;

  public MessageDto() {}

  public MessageDto(Message message) {
    this.id = message.getId();
    this.to = message.getTo().getEmail();
    this.from = message.getFrom().getEmail();
    this.createDate = message.getCreateDate();
    this.title = message.getTitle();
    this.message = message.getMessage();
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTo() {
    return to;
  }

  public void setTo(String to) {
    this.to = to;
  }

  public String getFrom() {
    return from;
  }

  public void setFrom(String from) {
    this.from = from;
  }

  public Date getCreateDate() {
    return createDate;
  }

  public void setCreateDate(Date createDate) {
    this.createDate = createDate;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}
