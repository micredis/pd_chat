package dplatonov.pd_chat.enums;

public enum RoleEnum {
  ADMIN("ADMIN"),
  PARTICIPANTS("PARTICIPANTS");

  private String role;

  RoleEnum(String role) {
    this.role = role;
  }

  public static String getRoleEnum(RoleEnum type) {
    return type.toString();
  }

  @Override
  public String toString() {
    return this.role;
  }
}
