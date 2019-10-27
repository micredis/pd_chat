package dplatonov.pd_chat.dao;

import org.springframework.stereotype.Repository;

import dplatonov.pd_chat.entity.User;

@Repository
public interface AccountDao extends GenericDao<AccountDao> {

  User findByNameAndPassword(String name, String password);
}
