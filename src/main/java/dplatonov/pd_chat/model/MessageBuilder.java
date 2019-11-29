package dplatonov.pd_chat.model;

import java.util.Date;

public class MessageBuilder {

  private Long id;
  private User to;
  private User from;
  private Date createDate;
  private String title;
  private String message;
  private Boolean isDeleted;

  public MessageBuilder setId(Long id) {
    this.id = id;
    return this;
  }

  public MessageBuilder setTo(User to) {
    this.to = to;
    return this;
  }

  public MessageBuilder setFrom(User from) {
    this.from = from;
    return this;
  }

  public MessageBuilder setCreateDate(Date createDate) {
    this.createDate = createDate;
    return this;
  }

  public MessageBuilder setTitle(String title) {
    this.title = title;
    return this;
  }

  public MessageBuilder setMessage(String message) {
    this.message = message;
    return this;
  }

  public MessageBuilder setIsDeleted(Boolean isDeleted) {
    this.isDeleted = isDeleted;
    return this;
  }

  public Message createMessage() {
    return new Message(id, to, from, createDate, title, message, isDeleted);
  }
}
