import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-notification',
  templateUrl: './client-notification.component.html',
  styleUrls: ['./client-notification.component.css']
})
export class ClientNotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  recharges = [
    { message: 'Recharge de votre compte en ligne effectuée', date: new Date('2022-01-01') },
    { message: 'Recharge de votre compte en ligne effectuée', date: new Date('2022-01-03') },
    { message: 'Recharge de votre compte en ligne effectuée', date: new Date('2022-01-01') },
    { message: 'Recharge de votre compte en ligne effectuée', date: new Date('2022-01-03') }
  ];

  paiementsFactures = [
    { message: 'Paiement de la facture EDF effectué', date: new Date('2022-01-02') },
    { message: 'Paiement de la facture Orange effectué', date: new Date('2022-01-04') },
    { message: 'Paiement de la facture EDF effectué', date: new Date('2022-01-02') },
    { message: 'Paiement de la facture Orange effectué', date: new Date('2022-01-04') }
  ];

}
