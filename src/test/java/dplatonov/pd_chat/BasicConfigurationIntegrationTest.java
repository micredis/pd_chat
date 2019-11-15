package dplatonov.pd_chat;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.net.MalformedURLException;
import java.net.URL;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Disabled
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class BasicConfigurationIntegrationTest {
  TestRestTemplate restTemplate;
  URL base;
  @LocalServerPort int port;

  @BeforeEach
  void setUp() throws MalformedURLException {
    restTemplate = new TestRestTemplate("user", "password");
    base = new URL("http://localhost:" + port);
  }

  @Disabled
  @Test
  void whenLoggedUserRequestsHomePage_ThenSuccess() throws IllegalStateException {
    ResponseEntity<String> response = restTemplate.getForEntity(base.toString(), String.class);

    assertEquals(HttpStatus.OK, response.getStatusCode());
  }

  @Disabled
  @Test
  void whenUserWithWrongCredentials_thenUnauthorizedPage() {

    restTemplate = new TestRestTemplate("user", "wrongpassword");
    ResponseEntity<String> response = restTemplate.getForEntity(base.toString(), String.class);

    assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
  }
}
