package dplatonov.pd_chat.contoroller;

import dplatonov.pd_chat.dto.AddressBookDto;
import dplatonov.pd_chat.service.AddressBookService;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/address-book")
@Validated
public class AddressBookController {
  private final AddressBookService addressBookService;

  @Autowired
  public AddressBookController(AddressBookService addressBookService) {
    this.addressBookService = addressBookService;
  }

  @GetMapping(value = "/list")
  @ResponseStatus(HttpStatus.OK)
  public List<AddressBookDto> get() {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    String email = auth.getName();
    return addressBookService.getAddressBookByEmail(email);
  }

  @PutMapping
  @ResponseStatus(HttpStatus.CREATED)
  public AddressBookDto create(@Valid @RequestBody AddressBookDto addressBookDto) {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    String email = auth.getName();
    return addressBookService.create(email, addressBookDto);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public void delete(@PathVariable("id") @Min(1) Long id) {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    String email = auth.getName();
    addressBookService.delete(email, id);
  }
}
