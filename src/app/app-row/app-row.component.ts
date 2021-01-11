import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[myTR]',
  templateUrl: './app-row.component.html',
  styleUrls: ['./app-row.component.scss']
})
export class AppRowComponent implements OnInit {

  constructor() { }
  @Input() data:any;
  ngOnInit(): void {}
  

}
