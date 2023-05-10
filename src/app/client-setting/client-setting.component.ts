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
  
  constructor() { }

  ngOnInit() {
  }

}
