package dplatonov.pd_chat.service;

import dplatonov.pd_chat.dto.AddressBookDto;
import java.util.List;

public interface AddressBookService {
  List<AddressBookDto> getAddressBookByEmail(String email);

  AddressBookDto create(String email, AddressBookDto addressBookDto);

  void delete(String email, Long id);
}
