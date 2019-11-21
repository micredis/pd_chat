package dplatonov.pd_chat.dto;

import java.util.Date;

import dplatonov.pd_chat.model.Message;

public class MessageDto {
  private Long id;
  private Long sender;
  private Long owner;
  private Date createDate;
  private String title;
  private String message;

  public MessageDto() {}

  public MessageDto(Message message) {
    this.id = message.getId();
    this.sender = message.getSender().getId();
    this.owner = message.getOwner().getId();
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

  public Long getSender() {
    return sender;
  }

  public void setSender(Long sender) {
    this.sender = sender;
  }

  public Long getOwner() {
    return owner;
  }

  public void setOwner(Long owner) {
    this.owner = owner;
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
