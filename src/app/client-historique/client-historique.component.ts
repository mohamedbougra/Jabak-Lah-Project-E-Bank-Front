import { Component, OnInit, HostListener, ElementRef, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-client-historique',
  templateUrl: './client-historique.component.html',
  styleUrls: ['./client-historique.component.css']
})
export class ClientHistoriqueComponent implements OnInit {

  @ViewChild('searchFocus') searchFocus: ElementRef;

  keys = [
    { keyCode: 'AltLeft', isTriggered: false },
    { keyCode: 'ControlLeft', isTriggered: false },
  ];

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    this.keys.forEach((obj) => {
      if (obj.keyCode === event.code) {
        obj.isTriggered = true;
      }
    });

    const shortcutTriggered = this.keys.filter((obj) => obj.isTriggered).length === this.keys.length;

    if (shortcutTriggered) {
      this.searchFocus.nativeElement.focus();
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    this.keys.forEach((obj) => {
      if (obj.keyCode === event.code) {
        obj.isTriggered = false;
      }
    });
  }

  filteredOperation: any ;
  genreFilter : any ;
  searchTerm : any;
  checkAll: boolean = false;
  checkboxes: Array<boolean> = [];



  constructor() { }

  data = [
    { operation: 'op1', type: 'type1', date: '2022-01-01', montant: 100, benificaire: 'ikram' },
    { operation: 'op2', type: 'type2', date: '2022-01-02', montant: 200, benificaire: 'mohamed' },
    { operation: 'op3', type: 'type3', date: '2022-01-03', montant: 300, benificaire: 'jalila' },
    { operation: 'op4', type: 'type4', date: '2022-01-04', montant: 400, benificaire: 'halima' },
    { operation: 'op5', type: 'type5', date: '2022-01-05', montant: 500, benificaire: 'salah' },
    { operation: 'op6', type: 'type6', date: '2022-01-06', montant: 600, benificaire: 'hamza' },
    { operation: 'op7', type: 'type7', date: '2022-01-07', montant: 700, benificaire: 'ben7' },
    { operation: 'op8', type: 'type8', date: '2022-01-08', montant: 800, benificaire: 'ben8' },
    { operation: 'op9', type: 'type9', date: '2022-01-09', montant: 900, benificaire: 'ben9' },
    { operation: 'op10', type: 'type10', date: '2022-01-10', montant: 1000, benificaire: 'ben10' }
  ];
  ngOnInit() {
    this.checkboxes = new Array(10).fill(false);
  }

  toggleAll() {
    if (this.checkAll) {
      this.checkboxes = this.checkboxes.map(() => true);
    } else {
      this.checkboxes = this.checkboxes.map(() => false);
    }
  }

  toggleCheckbox(index: number) {
    this.checkboxes[index] = !this.checkboxes[index];
    if (!this.checkboxes[index]) {
      this.checkAll = false;
    }
  }
 
}
