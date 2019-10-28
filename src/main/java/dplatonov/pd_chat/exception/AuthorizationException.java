package dplatonov.pd_chat.exception;

import java.io.IOException;

public class AuthorizationException extends IOException {
  public AuthorizationException(String message) {
    super(message);
  }
}
