import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSettingComponent } from './client-setting.component';

describe('ClientSettingComponent', () => {
  let component: ClientSettingComponent;
  let fixture: ComponentFixture<ClientSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
