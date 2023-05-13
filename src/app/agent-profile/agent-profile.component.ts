import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {

  myTableData: any[] = [
    { Nom: 'Amina', Prenom: 'Amina', Email: 'info@example.com', 
     Phone: '+212 62167539', Piece_identite: 'carte ID', N_piece_identite: 'K213453', 
     Date_de_Naissance: '17/01/2004', Address: 'Lhiiiiha'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
