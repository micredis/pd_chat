package dplatonov.pd_chat.dto;

import java.io.Serializable;

import dplatonov.pd_chat.model.User;

public class UserDto implements Serializable {

  private static final long serialVersionUID = -5197703861894984879L;
  private Long id;
  private String email;
  private String password;
  private String description;
  private String role;

  public UserDto() {}

  public UserDto(User user) {
    this.id = user.getId();
    this.email = user.getEmail();
    this.password = user.getPassword();
    this.description = user.getDescription();
    this.role = user.getRole().getRole();
  }

  public Long getId() {
    return id;
  }

  public String getEmail() {
    return email;
  }

  public String getPassword() {
    return password;
  }

  public String getDescription() {
    return description;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }
}
