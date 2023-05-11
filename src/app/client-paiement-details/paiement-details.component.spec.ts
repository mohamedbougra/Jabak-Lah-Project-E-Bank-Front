import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementDetailsComponent } from './paiement-details.component';

describe('PaiementDetailsComponent', () => {
  let component: PaiementDetailsComponent;
  let fixture: ComponentFixture<PaiementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
