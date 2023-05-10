import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-facture',
  templateUrl: './client-facture.component.html',
  styleUrls: ['./client-facture.component.css']
})
export class ClientFactureComponent implements OnInit {

  constructor() { }

  private produits=[
    {
    name:'INWI RECHARGES',
    description: 'TELEPHONIE ET INTERNET SIM',
    image:'/src/assets/images/inwi.png',
    type: 'recharge',
  },
    {
      name:'IAM RECHARGES',
      description: 'TELEPHONIE ET INTERNET SIM',
      image:'/src/assets/images/logo_iam.png',
      type: 'recharge',
    },
      {
        name:'ORANGE RECHARGES ',
        description: 'TELEPHONIE ET INTERNET SIM',
        image:'/src/assets/images/Orange.png',
        type: 'recharge',
      },
      {
        name:'REDAL',
        description: 'FACTURE REDAL',
        image:'/src/assets/images/redal.png',
        type: 'facture',
      },
        
        {
          name:' AMENDIS TANGER ',
          description: 'FACTURES AMENDIS TANGER',
          image:'/src/assets/images/Amendis.png',
          type: 'facture',
        },
          {
            name:'LYDEC',
            description: 'FACTURE LYDEC',
            image:'/src/assets/images/lydec.png',
            type: 'facture',
          }
];
  ngOnInit() {
  }


}
