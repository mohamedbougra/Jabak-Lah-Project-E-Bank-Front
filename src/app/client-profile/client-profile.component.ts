import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  title = 'profile';
  myTableData: any[] = [
    { Nom: 'Amina', Prenom: 'Amina', Email: 'info@example.com', 
     Phone: '+212 62167539', Piece_identite: 'carte ID', N_piece_identite: 'K213453', 
     Date_de_Naissance: '17/01/2004', Address: 'Lhiiiiha'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
