package dplatonov.pd_chat.dto;

import dplatonov.pd_chat.model.Message;
import java.util.Date;
import javax.validation.constraints.Null;

public class MessageDto {
  @Null private Long id;
  private String destinationEmail;
  private String ownerEmail;
  private Date createDate;
  private String title;
  private String message;

  public MessageDto() {}

  public MessageDto(Message message) {
    this.id = message.getId();
    this.destinationEmail = message.getDestination().getEmail();
    this.ownerEmail = message.getOwner().getEmail();
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

  public String getDestinationEmail() {
    return destinationEmail;
  }

  public void setDestinationEmail(String destinationEmail) {
    this.destinationEmail = destinationEmail;
  }

  public String getOwnerEmail() {
    return ownerEmail;
  }

  public void setOwnerEmail(String ownerEmail) {
    this.ownerEmail = ownerEmail;
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
