import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMainComponent } from './agent-main.component';

describe('AgentMainComponent', () => {
  let component: AgentMainComponent;
  let fixture: ComponentFixture<AgentMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
