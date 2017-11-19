import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private router: Router,private dataSer:DataService) { }

  isAuth: String;
  cars = undefined;
  ngOnInit() {
     this.dataSer.postCar(undefined);
     if(this.dataSer.getIdUser()!==undefined){
       this.dataSer.getCars().subscribe(
          data => {
            this.cars = data.json();
          }
        );
      }else{
        this.router.navigate(['./prijava']);
      }
      this.isAuth = "yes";
  }


obrisi(car){
  if(confirm("Da li ste sigurni da zelite obrisati automobil "+car.MARKA_AUTOMOBILA+" "+car.MODEL_AUTOMOBILA)) {
  this.dataSer.deleteCar(car.ID_AUTOMOBIL).subscribe(
       data => {
         this.dataSer.getCars().subscribe(
              data => {
                this.cars = data.json();
              }
            );

       }
     );
   }
}


addCar(){
   this.router.navigate(['./adminpage/add-edit-car']);
}


izmeni(car){
  this.dataSer.postCar(car);
  this.router.navigate(['./adminpage/add-edit-car/'+car.ID_AUTOMOBIL]);
}

odjava(){
  this.router.navigate(['/']);
}

}


@Injectable()
export class Car {
    constructor(
        public ID_AUTOMOBIL: number,
        public ID_TARIFNA_KLASA: number,
        public ID_OSIGURANJE: number,
        public MARKA_AUTOMOBILA: string,
        public MODEL_AUTOMOBILA: string,
        public DATUM_KUPOVINE: string,
        public CENA_AUTOMOBILA: number,
        public KILOMETRAZA: number,
        public GODINA_PROIZVODNJE: string,
        public SNAGA_AUTOMOBILA: number,
        public URL_SLIKE: string
    ){}
}
