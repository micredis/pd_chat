package dplatonov.pd_chat.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "user", schema = "pd_chat")
@DynamicUpdate
public class User extends BaseEntity implements Comparable<User>, Serializable {

  private static final long serialVersionUID = 9198915606221033420L;
  private Long id;
  private String name;
  private String password;
  private String description;

  @Id
  @Column(name = "id", unique = true, nullable = false)
  @GeneratedValue(strategy = GenerationType.AUTO, generator = "user_id_seq")
  @SequenceGenerator(
      name = "user_id_seq",
      sequenceName = "user_id_seq",
      allocationSize = 1)
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  @Column(name = "name", nullable = false, unique = true)
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Column(name = "password", nullable = false, unique = true)
  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @Column(name = "description")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  @Override
  public String toString() {
    return "User{" +
        "id=" + id +
        ", name='" + name + '\'' +
        ", password='" + password + '\'' +
        ", description='" + description + '\'' +
        '}';
  }

  @Override
  public int compareTo(User o) {
    return this.getId().compareTo(o.getId());
  }
}
