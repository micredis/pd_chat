package dplatonov.pd_chat.dao;

import dplatonov.pd_chat.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleDao extends JpaRepository<Role, Long> {
  Role findByRole(String role);
}
