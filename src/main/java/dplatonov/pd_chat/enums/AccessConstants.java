package dplatonov.pd_chat.enums;

public enum AccessConstants {
  ADMIN("ADMIN"),
  PARTICIPANT("PARTICIPANT");
  private String name;

  AccessConstants(String name) {
    this.name = name;
  }

  public static String getAccessEnum(AccessConstants type) {
    return type.toString();
  }

  @Override
  public String toString() {
    return this.name;
  }
}
