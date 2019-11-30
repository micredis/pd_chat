package dplatonov.pd_chat.dao;

import dplatonov.pd_chat.model.AddressBook;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressBookDao extends JpaRepository<AddressBook, Long> {

  List<AddressBook> findAllByDeletedAndUserEmail(boolean b, String email);

  AddressBook findByIdAndUserEmail(Long id, String email);
}
