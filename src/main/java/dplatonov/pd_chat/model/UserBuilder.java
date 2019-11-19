package dplatonov.pd_chat.model;

public class UserBuilder {

  private Long id;
  private String email;
  private String password;
  private String description;

  public UserBuilder setId(Long id) {
    this.id = id;
    return this;
  }

  public UserBuilder setEmail(String email) {
    this.email = email;
    return this;
  }

  public UserBuilder setPassword(String password) {
    this.password = password;
    return this;
  }

  public UserBuilder setDescription(String description) {
    this.description = description;
    return this;
  }

  public User createUser() {
    return new User(id, email, password, description);
  }
}
