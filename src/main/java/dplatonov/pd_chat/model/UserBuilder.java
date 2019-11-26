package dplatonov.pd_chat.model;

public class UserBuilder {

  private Long id;
  private String fullName;
  private String login;
  private String email;
  private String password;
  private Role role;

  public UserBuilder setId(Long id) {
    this.id = id;
    return this;
  }

  public UserBuilder setFullName(String fullName) {
    this.fullName = fullName;
    return this;
  }

  public UserBuilder setLogin(String login) {
    this.login = login;
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

  public UserBuilder setRole(Role role) {
    this.role = role;
    return this;
  }

  public User createUser() {
    return new User(id, fullName, login, email, password, role);
  }
}
