package dplatonov.pd_chat.model;

import java.io.Serializable;

public class ResponseMessageDto implements Serializable {

  private static final long serialVersionUID = 6596389661125647679L;
  private final String message;

  public ResponseMessageDto(String message) {
    this.message = message;
  }

  public String getMessage() {
    return message;
  }

  @Override
  public String toString() {
    return "ResponseMessageDto{" + "message='" + message + '\'' + '}';
  }
}
