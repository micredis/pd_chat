package dplatonov.pd_chat.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.Transient;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

import dplatonov.pd_chat.util.JsonConverter;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseEntity implements Serializable {
  private static final Logger log = LogManager.getLogger(JsonConverter.class);
  private static final long serialVersionUID = -2631845468118471176L;

  private boolean enabled;
  private boolean deleted;
  private boolean changed;
  private Date createDate;
  private User createUser;
  private Date updateDate;
  private User updateUser;

  @Column(name = "enabled", nullable = false)
  public boolean isEnabled() {
    return enabled;
  }

  public void setEnabled(boolean enabled) {
    this.enabled = enabled;
  }

  @Column(name = "deleted", nullable = false)
  public boolean isDeleted() {
    return deleted;
  }

  public void setDeleted(boolean deleted) {
    this.deleted = deleted;
  }

  @Transient
  public boolean isChanged() {
    return changed;
  }

  public void setChanged(boolean changed) {
    this.changed = changed;
  }

  @CreatedDate
  @Column(name = "create_date", updatable = false)
  public Date getCreateDate() {
    return createDate;
  }

  public void setCreateDate(Date createDate) {
    this.createDate = createDate;
  }

  @JsonIgnore
  @CreatedBy
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "create_user", updatable = false)
  public User getCreateUser() {
    return createUser;
  }

  public void setCreateUser(User createUser) {
    this.createUser = createUser;
  }

  @LastModifiedDate
  @Column(name = "update_date")
  public Date getUpdateDate() {
    return updateDate;
  }

  public void setUpdateDate(Date updateDate) {
    this.updateDate = updateDate;
  }

  @JsonIgnore
  @LastModifiedBy
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "update_user")
  public User getUpdateUser() {
    return updateUser;
  }

  public void setUpdateUser(User updateUser) {
    this.updateUser = updateUser;
  }

  /**
   * Hash generator. For usual cases base and multiplier should be number from 10 till 99. For
   * strongest unique increase this values.
   */
  public static int generateHash(int base, int multiplier, Object... obj) {
    int hash = base;
    for (Object anObj : obj) {
      hash = multiplier * hash + (anObj != null ? anObj.hashCode() : 0);
    }
    return hash;
  }

  /** Length of parameters should be even Parameters equals by pairs. 1 with 2 , 3 with 4 , .... */
  public static boolean generateEquals(Object... obj) {
    if (obj.length % 2 == 0) {
      for (int i = 0; i < obj.length / 2; i++) {
        if (!eql(obj[i * 2], obj[i * 2 + 1])) {
          return false;
        }
      }
      return true;
    }
    log.error("BASE-ENTITY-001: check params for equals method");
    return false;
  }

  private static boolean eql(Object o1, Object o2) {
    if (o1 == o2) {
      return true;
    }
    return o1 != null && o1.equals(o2);
  }

  @Override
  public String toString() {
    return "BaseEntity{" +
        "enabled=" + enabled +
        ", deleted=" + deleted +
        ", changed=" + changed +
        ", createDate=" + createDate +
        ", createUser=" + createUser +
        ", updateDate=" + updateDate +
        ", updateUser=" + updateUser +
        '}';
  }
}
