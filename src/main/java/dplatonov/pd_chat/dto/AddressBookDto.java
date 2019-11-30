package dplatonov.pd_chat.dto;

import dplatonov.pd_chat.model.AddressBook;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class AddressBookDto {
  private Long id;

  @NotNull(message = "Full name cannot be empty")
  private String fullName;

  @NotEmpty(message = "Email cannot be empty")
  @Email(message = "Email must be in correct format")
  private String email;

  private boolean deleted;

  public AddressBookDto() {}

  public AddressBookDto(AddressBook addressBook) {
    this.id = addressBook.getId();
    this.fullName = addressBook.getFullName();
    this.email = addressBook.getEmail();
    this.deleted = addressBook.isDeleted();
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public boolean isDeleted() {
    return deleted;
  }

  public void setDeleted(boolean deleted) {
    this.deleted = deleted;
  }
}
