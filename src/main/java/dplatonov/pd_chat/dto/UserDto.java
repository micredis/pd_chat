package dplatonov.pd_chat.dto;

import dplatonov.pd_chat.model.User;
import java.io.Serializable;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

public class UserDto implements Serializable {

  private static final long serialVersionUID = -4939671381969280325L;

  private Long id;
  @NotEmpty(message = "Full name cannot be empty")
  private String fullName;
  @NotEmpty(message = "Email cannot be empty")
  @Email(message = "Email must be in correct format")
  private String email;
  @NotEmpty(message = "Login cannot be empty")
  private String login;
  @NotEmpty(message = "Password cannot be empty")
  private String password;
  @NotNull(message = "Role cannot be empty")
  private String role;
  private boolean isActive;

  public UserDto() {}

  public UserDto(User user) {
    this.id = user.getId();
    this.fullName = user.getFullName();
    this.login = user.getLogin();
    this.email = user.getEmail();
    this.role = user.getRole().getRole();
    this.isActive = user.isActive();
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getLogin() {
    return login;
  }

  public void setLogin(String login) {
    this.login = login;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public boolean isActive() {
    return isActive;
  }

  public void setActive(boolean active) {
    isActive = active;
  }
}
