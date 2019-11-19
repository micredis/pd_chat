package dplatonov.pd_chat.dto;

import dplatonov.pd_chat.model.User;
import java.io.Serializable;

public class UserDto implements Serializable {

  private static final long serialVersionUID = 2335818420300707819L;
  private final Long id;
  private final String email;
  private final String password;
  private final String description;

  public UserDto(User user) {
    this.id = user.getId();
    this.email = user.getEmail();
    this.password = user.getPassword();
    this.description = user.getDescription();
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
}
