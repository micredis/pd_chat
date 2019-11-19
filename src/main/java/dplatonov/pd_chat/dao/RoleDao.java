package dplatonov.pd_chat.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dplatonov.pd_chat.model.Role;

@Repository
public interface RoleDao extends JpaRepository<Role, Long> {
  Role findByRole(String role);

}
