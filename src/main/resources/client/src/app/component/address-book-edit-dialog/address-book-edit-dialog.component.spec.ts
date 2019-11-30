import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookEditDialogComponent } from './address-book-edit-dialog.component';

describe('AddressBookEditDialogComponent', () => {
  let component: AddressBookEditDialogComponent;
  let fixture: ComponentFixture<AddressBookEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
