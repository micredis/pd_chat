package dplatonov.pd_chat.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "users", schema = "pd_chat")
@EntityListeners(AuditingEntityListener.class)
@DynamicUpdate
public class User {

  private Long id;
  private String email;
  private String password;
  private String description;
  private boolean active;
  private Role role;

  public User() {}

  public User(Long id, String email, String password, String description, Role role) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.description = description;
    this.role = role;
  }

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

  @Column(name = "email", nullable = false)
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  @Column(name = "password", nullable = false)
  @Length(min = 5, message = "*Your password must have at least 5 characters")
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

  @Column(name = "active", nullable = false, columnDefinition = "boolean default true")
  public boolean isActive() {
    return active;
  }

  public void setActive(boolean active) {
    this.active = active;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  @OneToOne
  @JoinTable(
      name = "user_role",
      joinColumns = @JoinColumn(name = "user_id"),
      inverseJoinColumns = @JoinColumn(name = "role_id"))
  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }
}
