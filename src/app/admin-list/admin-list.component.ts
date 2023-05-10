import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  agents=[
    {
    id:'1',
    nom:'Jalila',
    prenom: 'Zaid',
    poste:'Directrice',
    tel:'0636169154',
    email: 'jalilazaid77@gmail.com',
  },
  {
    id:'2',
    nom:'Halima',
    prenom: 'Masmar',
    poste:'Responsable de clients',
    tel:'0636187154',
    email: 'Halima.Masmar@gmail.com',
  },
  {
    id:'3',
    nom:'Mohmaed',
    prenom: 'Zaid',
    poste:'Responsable de Marketing',
    tel:'0636133154',
    email: 'MohamedZaid88@gmail.com',
  },
  {
    id:'4',
    nom:'Soukaina',
    prenom: 'Zaid',
    poste:'Responsable de clients',
    tel:'0636133144',
    email: 'SoukainaZaid86@gmail.com',
  },
        
  {
    id:'5',
    nom:'Soukaina',
    prenom: 'Zaid',
    poste:'Responsable de clients',
    tel:'0636133144',
    email: 'SoukainaZaid86@gmail.com',
  },
  {
    id:'6',
    nom:'Soukaina',
    prenom: 'Zaid',
    poste:'Responsable de clients',
    tel:'0636133144',
    email: 'SoukainaZaid86@gmail.com',
  }
];

}
