import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-effectuer-paiement',
  templateUrl: './effectuer-paiement.component.html',
  styleUrls: ['./effectuer-paiement.component.css']
})
export class EffectuerPaiementComponent implements OnInit {
  title = 'Effectuer un paiement';
  image='../assets/images/Logo_inwi.png';
  imageTitle= 'PAIMENT DE FACTURES  RECHARGES';

  constructor() { }

  ngOnInit() {
  }

}
