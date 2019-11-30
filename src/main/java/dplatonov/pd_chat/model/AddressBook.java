package dplatonov.pd_chat.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "address_book", schema = "pd_chat")
@EntityListeners(AuditingEntityListener.class)
@DynamicUpdate
public class AddressBook {
  private Long id;
  private String fullName;
  private String email;
  private boolean deleted;
  private User user;

  public AddressBook() {}

  public AddressBook(Long id, String fullName, String email, boolean deleted, User user) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.deleted = deleted;
    this.user = user;
  }

  @Id
  @GeneratedValue(generator = "address_book_id_seq", strategy = GenerationType.AUTO)
  @SequenceGenerator(
    name = "address_book_id_seq",
    sequenceName = "address_book_id_seq",
    allocationSize = 1
  )
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  @Column(name = "full_name", nullable = false)
  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  @Column(name = "email", nullable = false)
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  @Column(name = "deleted", nullable = false)
  public boolean isDeleted() {
    return deleted;
  }

  public void setDeleted(boolean deleted) {
    this.deleted = deleted;
  }

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id", nullable = false)
  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }
}
