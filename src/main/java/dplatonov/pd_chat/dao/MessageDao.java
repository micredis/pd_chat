package dplatonov.pd_chat.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dplatonov.pd_chat.model.Message;

@Repository
public interface MessageDao extends JpaRepository<Message, Long> {}
