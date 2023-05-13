import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulPaiementComponent } from './recapitul-paiement.component';

describe('RecapitulPaiementComponent', () => {
  let component: RecapitulPaiementComponent;
  let fixture: ComponentFixture<RecapitulPaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapitulPaiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapitulPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
