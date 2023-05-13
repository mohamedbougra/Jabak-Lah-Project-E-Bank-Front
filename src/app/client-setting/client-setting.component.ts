import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-setting',
  templateUrl: './client-setting.component.html',
  styleUrls: ['./client-setting.component.css']
})
export class ClientSettingComponent implements OnInit {

  nom = 'NOM';
  prenom = 'PRENOM';
  activeForm = '';

  showForm(form: string) {
    this.activeForm = form;
  }

  myTableData: any[] = [
    { Nom: 'Amina', Prenom: 'Amina', Email: 'info@example.com', 
     Phone: '+212 62167539', Piece_identite: 'carte ID', N_piece_identite: 'K213453', 
     Date_de_Naissance: '17/01/2004', Address: 'Lhiiiiha'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}