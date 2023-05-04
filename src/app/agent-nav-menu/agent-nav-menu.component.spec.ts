import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentNavMenuComponent } from './agent-nav-menu.component';

describe('AgentNavMenuComponent', () => {
  let component: AgentNavMenuComponent;
  let fixture: ComponentFixture<AgentNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
