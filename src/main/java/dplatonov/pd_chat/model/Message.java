package dplatonov.pd_chat.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "message", schema = "pd_chat")
@EntityListeners(AuditingEntityListener.class)
@DynamicUpdate
public class Message {
  private Long id;
  private User from;
  private User to;
  private Date createDate;
  private String title;
  private String message;
  private Boolean deleted;

  public Message() {}

  public Message(Long id, User to, User from, Date createDate, String title, String message) {
    this.id = id;
    this.to = to;
    this.from = from;
    this.createDate = createDate;
    this.title = title;
    this.message = message;
  }

  @Id
  @GeneratedValue(generator = "message_id_seq", strategy = GenerationType.AUTO)
  @SequenceGenerator(name = "massage_id_seq", sequenceName = "message_id_seq", allocationSize = 1)
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  @OneToOne(fetch = FetchType.EAGER)
  @JoinTable(
      name = "message_address",
      joinColumns = @JoinColumn(name = "message_id"),
      inverseJoinColumns = @JoinColumn(name = "from_user_id"))
  @CreatedBy
  public User getFrom() {
    return from;
  }

  public void setFrom(User from) {
    this.from = from;
  }

  @OneToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "to_user_id", referencedColumnName = "id", table = "message_address")
  public User getTo() {
    return to;
  }

  public void setTo(User to) {
    this.to = to;
  }

  @Column(name = "create_date", nullable = false)
  @CreatedDate
  public Date getCreateDate() {
    return createDate;
  }

  public void setCreateDate(Date createDate) {
    this.createDate = createDate;
  }

  @Column(name = "title", nullable = false)
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  @Column(name = "message", nullable = false)
  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  @Column(name = "deleted", nullable = false, columnDefinition = "boolean default false")
  public Boolean isDeleted() {
    return deleted;
  }

  public void setDeleted(Boolean deleted) {
    this.deleted = deleted;
  }
}
