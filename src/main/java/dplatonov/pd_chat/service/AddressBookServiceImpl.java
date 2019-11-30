package dplatonov.pd_chat.service;

import dplatonov.pd_chat.dao.AddressBookDao;
import dplatonov.pd_chat.dao.UserDao;
import dplatonov.pd_chat.dto.AddressBookDto;
import dplatonov.pd_chat.model.AddressBook;
import dplatonov.pd_chat.model.AddressBookBuilder;
import dplatonov.pd_chat.model.User;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressBookServiceImpl implements AddressBookService {
  private static final Logger log = LogManager.getLogger(AddressBookServiceImpl.class);
  private final AddressBookDao addressBookDao;
  private final UserDao userDao;

  @Autowired
  public AddressBookServiceImpl(AddressBookDao addressBookDao, UserDao userDao) {
    this.addressBookDao = addressBookDao;
    this.userDao = userDao;
  }

  @Override
  public List<AddressBookDto> getAddressBookByEmail(String email) {
    List<AddressBook> allByEmail = addressBookDao.findAllByDeletedAndUserEmail(false, email);
    log.info("ADDRESS-BOOK-SERVICE-001: Retrieve address book from Postgres is complete");

    return allByEmail.stream().map(AddressBookDto::new).collect(Collectors.toList());
  }

  @Override
  public AddressBookDto create(String email, AddressBookDto addressBookDto) {
    Optional<User> byEmailAndActive = userDao.findByEmailAndActive(email, true);
    User user =
        byEmailAndActive.orElseGet(
            () -> {
              String errorMessage = "user with email " + email + " does not exist or not active";
              log.error("ADDRESS-BOOK-SERVICE-002: " + errorMessage);
              throw new IllegalArgumentException(errorMessage);
            });
    AddressBook addressBook =
        new AddressBookBuilder()
            .setId(addressBookDto.getId())
            .setFullName(addressBookDto.getFullName())
            .setEmail(addressBookDto.getEmail())
            .setUser(user)
            .createAddressBook();

    addressBookDao.save(addressBook);
    log.info("ADDRESS-BOOK-SERVICE-003: Address book save is complete");

    return new AddressBookDto(addressBook);
  }

  @Override
  public void delete(String email, Long id) {
    AddressBook addressbook = addressBookDao.findByIdAndUserEmail(id, email);
    addressbook.setDeleted(true);
    addressBookDao.save(addressbook);
    log.info(
        "ADDRESS-BOOK-SERVICE-004: Address book with email "
            + email
            + " for user with id "
            + id
            + " mark as deleted");
  }
}
