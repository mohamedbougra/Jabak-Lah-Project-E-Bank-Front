import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement-details',
  templateUrl: './paiement-details.component.html',
  styleUrls: ['./paiement-details.component.css']
})
export class PaiementDetailsComponent implements OnInit {
  title = 'Paiment de facture';
  title1='Paiement par reference';
  title2='Selectioner pour payer'
  image='../assets/images/Logo_inwi.png';
  imageTitle= 'PAIMENT DE FACTURES  RECHARGES';
  Creancier="Creancier";
  Creance='Creance';
  Donnateur ='Donnateur';
  soutitle1="ALCS";
  soutitle2="SIDACTION";
  soutitle3="ANAS";
  value='10.00 DH';


  constructor() { }

  ngOnInit() {
  }

}
