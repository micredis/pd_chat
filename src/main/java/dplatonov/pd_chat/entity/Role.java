package dplatonov.pd_chat.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "role", schema = "pd_chat")
@EntityListeners(AuditingEntityListener.class)
public class Role {
  private Long id;
  private String role;

  @Id
  @Column(name = "id")
  @GeneratedValue(generator = "role_id_seq", strategy = GenerationType.AUTO)
  @SequenceGenerator(name = "role_id_seq", sequenceName = "role_id_seq", allocationSize = 1)
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  @Column(name = "role", nullable = false)
  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  @Override
  public String toString() {
    return "Role{" + "id=" + id + ", role='" + role + '\'' + '}';
  }
}
