import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recapitul-paiement',
  templateUrl: './recapitul-paiement.component.html',
  styleUrls: ['./recapitul-paiement.component.css']
})
export class RecapitulPaiementComponent implements OnInit {
  title = 'Paiment de facture';
  title1='Paiement par reference';
  title2='Recapitulatif des informations saisies'
  image='../assets/images/Logo_inwi.png';
  imageTitle= 'PAIMENT DE FACTURES  RECHARGES';
  Creancier="Creancier";
  Creance='Creance';
  Donnateur ='Donnateur';
  soutitle1="ALCS";
  soutitle2="SIDACTION";
  soutitle3="ANAS";
  value='10.00 DH';

 reference: string ="10000119373";

 description: string ="Don Sidaction";
 prixTTC: number=10.00; 



  constructor() { }

  ngOnInit() {
  }

}
