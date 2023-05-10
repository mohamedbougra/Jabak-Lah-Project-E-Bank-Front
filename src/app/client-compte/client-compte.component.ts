import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-compte',
  templateUrl: './client-compte.component.html',
  styleUrls: ['./client-compte.component.css']
})
export class ClientCompteComponent implements OnInit {

  title = 'compte-interface';
  selectedAccount: string;
  accountBalance: number;
  transactionHistory: any[];

  constructor() { 

    this.selectedAccount = 'compte-chèques'; // initial account selection
    this.accountBalance = 1000; // initial account balance
    this.transactionHistory = [ { description: 'Paiement par carte', date: '2022-05-01', amount: "25.0 MAD"},
    { description: 'Virement émis', date: '2022-04-28', amount: "-50.0 MAD"  },
    { description: 'Retrait d\'argent', date: '2022-04-24', amount: "-20.0 MAD" }
  ];

  }

  selectAccount(accountType: string) {
    this.selectedAccount = accountType;

    // update account balance and transaction history based on selected account
    if (accountType === 'compte-chèques') {
      this.accountBalance = 1000;
      this.transactionHistory = [ { description: 'Paiement par carte', date: '2022-05-01', amount: "25.0 MAD" },
                                  { description: 'Virement émis', date: '2022-04-28', amount: "-50.0 MAD"},
                                  { description: 'Retrait d\'argent', date: '2022-04-24', amount: "-20.0 MAD" }
                                ];
    } else if (accountType === 'compte-épargne') {
      this.accountBalance = 5000;
      this.transactionHistory = [{ description: 'Depot1', date: '2022-05-01', amount: "57.0 MAD" },
                                 { description: 'Depot2', date: '2022-04-28', amount: "50.0 MAD" },
                                 { description: 'Depot3', date: '2022-04-24', amount: "29.0 MAD" }];
    }
  }

  ngOnInit() {
  }

}
