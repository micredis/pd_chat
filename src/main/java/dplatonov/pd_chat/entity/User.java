package dplatonov.pd_chat.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "users", schema = "pd_chat")
@EntityListeners(AuditingEntityListener.class)
@DynamicUpdate
public class User {

  private Long id;
  private String name;
  private String password;
  private String description;

  @Id
  @Column(name = "id", nullable = false, unique = true)
  @GeneratedValue(strategy = GenerationType.AUTO, generator = "users_id_seq")
  @SequenceGenerator(name = "users_id_seq", sequenceName = "users_id_seq", allocationSize = 1)
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  @Column(name = "name", nullable = false)
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Column(name = "password", nullable = false)
  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @Column(name = "description", nullable = false)
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
