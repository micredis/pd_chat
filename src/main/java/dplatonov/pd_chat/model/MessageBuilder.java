package dplatonov.pd_chat.model;

import java.util.Date;

public class MessageBuilder {

  private Long id;
  private User destination;
  private User owner;
  private Date createDate;
  private String title;
  private String message;

  public MessageBuilder setId(Long id) {
    this.id = id;
    return this;
  }

  public MessageBuilder setDestination(User destination) {
    this.destination = destination;
    return this;
  }

  public MessageBuilder setOwner(User owner) {
    this.owner = owner;
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

  public Message createMessage() {
    return new Message(id, destination, owner, createDate, title, message);
  }
}