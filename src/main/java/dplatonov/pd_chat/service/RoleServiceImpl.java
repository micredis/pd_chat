package dplatonov.pd_chat.service;

import dplatonov.pd_chat.dao.RoleDao;
import dplatonov.pd_chat.model.Role;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {
  private static final Logger log = LogManager.getLogger(UserServiceImpl.class);

  private final RoleDao roleDao;

  @Autowired
  public RoleServiceImpl(RoleDao roleDao) {
    this.roleDao = roleDao;
  }

  @Override
  public Role getRole(String userRole) {
    log.info("ROLE-SERVICE-OO1: Start retrieve Role with user role " + userRole);
    Role role = roleDao.findByRole(userRole);
    log.info("ROLE-SERVICE-OO1: Retrieve Role with user role " + userRole + " is complete");
    return role;
  }
}
