package dplatonov.pd_chat.model;

import dplatonov.pd_chat.entity.User;
import java.io.Serializable;

public class UserDto implements Serializable {

  private static final long serialVersionUID = 1708544664018048521L;
  private final Long id;
  private final String name;
  private final String password;
  private final String description;

  public UserDto(Long id, String name, String password, String description) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.description = description;
  }

  public UserDto(User user) {
    this.id = user.getId();
    this.name = user.getName();
    this.password = user.getPassword();
    this.description = user.getDescription();
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getPassword() {
    return password;
  }

  public String getDescription() {
    return description;
  }
}
