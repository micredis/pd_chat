package dplatonov.pd_chat.aspects;

import dplatonov.pd_chat.enums.AccessConstants;
import dplatonov.pd_chat.model.Role;
import dplatonov.pd_chat.model.User;
import dplatonov.pd_chat.service.UserService;
import java.util.Objects;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class UserAspect {
  private static final Logger log = LogManager.getLogger(UserAspect.class);
  private final UserService userService;

  @Autowired
  public UserAspect(UserService userService) {
    this.userService = userService;
  }

  @Pointcut("@annotation(dplatonov.pd_chat.annotation.Admin)")
  public void adminAccessPointcutDefinition() {}

  @Pointcut("@annotation(dplatonov.pd_chat.annotation.Participant)")
  public void participantAccessPointcutDefinition() {}

  @Before("adminAccessPointcutDefinition()")
  public void validateUsersIsAnAdminRole() {
    checkUserRole(AccessConstants.ADMIN);
  }

  @Before("participantAccessPointcutDefinition()")
  public void validateUsersIsAParticipantRole() {
    checkUserRole(AccessConstants.PARTICIPANT);
  }

  private void checkUserRole(AccessConstants type) {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    String email = auth.getName();
    User user = userService.getUserByEmail(email);
    Role role = user.getRole();
    if (!Objects.equals(role.getRole(), type.toString())) {
      log.error("USER-ASPECT-001: User does not have access to the requested resource.");
      throw new AccessDeniedException("You don't have access to the requested resource.");
    }
  }
}
