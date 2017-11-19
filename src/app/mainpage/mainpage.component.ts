import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }
  isAuth: String;
  ngOnInit() {
      this.isAuth = "no";
  }

}
