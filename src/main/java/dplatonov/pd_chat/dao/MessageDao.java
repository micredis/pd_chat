package dplatonov.pd_chat.dao;

import dplatonov.pd_chat.model.Message;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageDao extends JpaRepository<Message, Long> {

  List<Message> findByFromEmail(String email);
}
