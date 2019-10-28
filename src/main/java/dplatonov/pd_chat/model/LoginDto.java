package dplatonov.pd_chat.model;

import java.io.Serializable;

public class LoginDto implements Serializable {

  private static final long serialVersionUID = -6060947873901147621L;
  private final String login;
  private final String password;

  public LoginDto(String login, String password) {
    this.login = login;
    this.password = password;
  }

  public String getLogin() {
    return login;
  }

  public String getPassword() {
    return password;
  }

  @Override
  public String toString() {
    return "LoginDto{" + "login='" + login + '\'' + ", password='" + password + '\'' + '}';
  }
}
