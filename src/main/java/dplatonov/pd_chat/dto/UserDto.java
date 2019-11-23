package dplatonov.pd_chat.dto;

import java.io.Serializable;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

import dplatonov.pd_chat.model.User;

public class UserDto implements Serializable {

  private static final long serialVersionUID = -5197703861894984879L;

  private Long id;

  @NotEmpty(message = "Email cannot be empty")
  @Email(message = "Email must be in correct format")
  private String email;

  @NotEmpty(message = "Password cannot be empty")
  private String password;

  @Null private String description;

  @NotNull(message = "Role cannot be empty")
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
}
