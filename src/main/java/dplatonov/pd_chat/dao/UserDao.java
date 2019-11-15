package dplatonov.pd_chat.dao;

import dplatonov.pd_chat.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Long> {

  User findByEmailAndPassword(String email, String password);

  User findByEmail(String email);
}
