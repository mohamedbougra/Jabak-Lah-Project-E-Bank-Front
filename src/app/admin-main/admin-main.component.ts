import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {


  clientName = 'John Doe';
  clientBalance = 1000;
  hashedBalance = '******';
  showBalance = false;

  
  toggleShowBalance() {
    this.showBalance = !this.showBalance;
  }

  ngOnInit(): void {
    this.createChart();
  }
  
  public chart: any;
  createChart(){
  
    const chartDat_json = {
      labels: ['Oct', 'Aug', 'July','Jun',
      'Jan', 'Feb', 'Mar', 'Apr',  ], 
      datasets: [
        {
          label: "Accepted Requests",
          data: ['100','0', '0', '0', '92',
                 '0', '573', '0'],
          backgroundColor: 'green'
        },
        {
          label: "Refused Requests",
          data: ['100', '500', '0', '50', '0',
                 '0', '', '300'],
          backgroundColor: 'red'
        }  
      ]
    };

    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
        '2022-05-14'], // x-axis labels for last 5 months
        datasets: [
          {
            label: "Money Owned", // y-axis label
            data: [100, 200, 150, 300, 270], // money owned data for last 5 months
            backgroundColor: '#0ea293'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      } 
    });

    this.chart = new Chart("MyChart1", {
      type: 'bar', //this denotes tha type of chart

      data: chartDat_json,

      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
