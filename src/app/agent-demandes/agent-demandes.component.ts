import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-demandes',
  templateUrl: './agent-demandes.component.html',
  styleUrls: ['./agent-demandes.component.css']
})
export class AgentDemandesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  recharges = [
    { message: 'Demande de creation d un compte normal', name: "ikram chkih" },
    { message: 'Demande de creation d un compte normal', name: "Hamza lakkab" },
    { message: 'Demande de creation d un compte Gold', name:  "salaheddine" },
    { message: 'Demande de creation d un compte Premium', name: "bougra mohamed " },
    { message: 'Demande de creation d un compte normal', name: "Jalila zaid " },
    { message: 'Demande de creation d un compte Gold', name: "Halima " },
  ];

}
