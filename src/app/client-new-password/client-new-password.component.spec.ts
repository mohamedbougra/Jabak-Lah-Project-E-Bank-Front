import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNewPasswordComponent } from './client-new-password.component';

describe('ClientNewPasswordComponent', () => {
  let component: ClientNewPasswordComponent;
  let fixture: ComponentFixture<ClientNewPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientNewPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
