import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDemandesComponent } from './agent-demandes.component';

describe('AgentDemandesComponent', () => {
  let component: AgentDemandesComponent;
  let fixture: ComponentFixture<AgentDemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
