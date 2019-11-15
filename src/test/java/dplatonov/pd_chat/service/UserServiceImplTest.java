package dplatonov.pd_chat.service;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

class UserServiceImplTest {
  private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  @Disabled
  @Test
  void testEncrypt() {
    String encode = passwordEncoder.encode("f566b2b2-298f-4fd3-8536-a5cf0c2f7277");
    System.out.println(encode);
  }

  @Disabled
  @Test
  void testEncrypt2() {
    String encode = passwordEncoder.encode("password");
    System.out.println(encode);
  }
}
