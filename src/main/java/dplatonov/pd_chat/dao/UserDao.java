package dplatonov.pd_chat.dao;

import dplatonov.pd_chat.model.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Long> {

  Optional<User> findByEmailAndActive(String email, Boolean isActive);

  Optional<User> findByEmail(String email);
}
