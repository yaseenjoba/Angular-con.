import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  employees = [
    { 
      Employee: { name: "Ahmad", age: '33', email: "example1@example.com", mobile: '+970564224899' }
    },
    {
      Employee: { name: "Ali", age: '22', email: "example2@example.com", company: "Facebook", mobile: '+972564244878' }
    },
    {
      Employee: { name: "Mohammad", age: '31', email: "example3@example.com", company: "Nvidia" }
    }
  ];

}
