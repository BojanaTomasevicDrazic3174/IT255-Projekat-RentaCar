import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Car} from '../adminpage/adminpage.component';
@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.css']
})
export class GalerijaComponent implements OnInit {

bands=[{ "name":"imeneko","info":"neki info koji moze da bude malo duzi...","img_url":"../../../assets/img/0.jpg"},
{ "name":"imeneko","info":"neki info koji moze da bude malo duzi...","img_url":"../../../assets/img/4.jpg"},
{ "name":"imeneko","info":"neki info koji moze da bude malo duzi...","img_url":"../../../assets/img/4.jpg"},
{ "name":"imeneko","info":"neki info koji moze da bude malo duzi...","img_url":"../../../assets/img/4.jpg"},
{ "name":"imeneko","info":"neki info koji moze da bude malo duzi...","img_url":"../../../assets/img/4.jpg"}
]

activeBand={"thumb2":"../../../assets/img/0.jpg","name":"imeneko","info":"neki info koji moze da bude malo duzi..."};
  constructor(private dataService: DataService) { }

cars=[{}]

  ngOnInit() {
     this.dataService.getCars().subscribe(
          data => {
            this.cars = data.json();
          }
        );
    this.cars.push(this.dataService.fetchData());
  }
  activeCar=Car;
display(car){
  this.activeCar=car;
}
}
