package dplatonov.pd_chat.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.query.Param;

@NoRepositoryBean
public interface GenericDao<T> extends JpaRepository<T, Long>, JpaSpecificationExecutor<T> {

  @Modifying
  @Query("UPDATE #{#entityName} e SET e.deleted = true, e.enabled = false, e.updateUser = ?#{principal}, e.updateDate = ?#{T(java.util.Calendar).getInstance().getTime()} WHERE e.id = :id")
  void deleteBaseEntity(@Param("id") Long id);

  @Query("SELECT e FROM #{#entityName} e WHERE e.deleted = false")
  List<T> findAll();

}
