package dplatonov.pd_chat.model;

public class AddressBookBuilder {

  private Long id;
  private String fullName;
  private String email;
  private boolean deleted;
  private User user;

  public AddressBookBuilder setId(Long id) {
    this.id = id;
    return this;
  }

  public AddressBookBuilder setFullName(String fullName) {
    this.fullName = fullName;
    return this;
  }

  public AddressBookBuilder setEmail(String email) {
    this.email = email;
    return this;
  }

  public AddressBookBuilder setDeleted(boolean deleted) {
    this.deleted = deleted;
    return this;
  }

  public AddressBookBuilder setUser(User user) {
    this.user = user;
    return this;
  }

  public AddressBook createAddressBook() {
    return new AddressBook(id, fullName, email, deleted, user);
  }
}
