import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSettingAccountFormComponent } from './client-setting-account-form.component';

describe('ClientSettingAccountFormComponent', () => {
  let component: ClientSettingAccountFormComponent;
  let fixture: ComponentFixture<ClientSettingAccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSettingAccountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSettingAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
