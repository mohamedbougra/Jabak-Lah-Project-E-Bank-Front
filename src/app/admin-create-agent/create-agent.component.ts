import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent implements OnInit {
  nom : string ="";
  prenom : string = "";
  cin : string ="";
  adresse : string ="";
  email : string ="";
  confirmationEmail : string ="";
  telephone : string ="";
  fichier : string ="";
  description : string ="";
  dateDeNaissance : string ="";
  patente : string ="";
  pienceIdentite :string="";
  registreCommerce : string="";



  constructor() { }

  ngOnInit() {
  }

}
