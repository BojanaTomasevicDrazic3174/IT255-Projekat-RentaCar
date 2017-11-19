import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Rezervacija } from '../korisnik.component';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-add-edit-rezervacija',
  templateUrl: './add-edit-rezervacija.component.html',
  styleUrls: ['./add-edit-rezervacija.component.css']
})
export class AddEditRezervacijaComponent implements OnInit {

  isAuth: String;
  public rez: Rezervacija;
  public myForm: FormGroup;
  private sub: any;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder,private dataService : DataService, private router: Router,private route: ActivatedRoute) {
  }

cena:number;
  ngOnInit() {
    if(this.dataService.getIdUser()!==undefined){


          this.isAuth = "yes";
          this.rez = this.dataService.getRezervacija();
          if(this.rez!= undefined){
            this.cena=this.rez.CENA;
          }
          this.myForm = this._fb.group({
              ID_REZERVACIJA: [],
              ID_AUTOMOBIL: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
              ID_KLIJENTA: [],
              ID_TRAJANJA: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
              DATUM_REZARVACIJE: [],
              DATUM_POCETKA: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
              DATUM_ZAVRSETKA: [],
              VALIDNA_REZERVACIJA: [],
              NACIN_REZERVISANJA: [''],
              PREDJENA_KILOMETRAZA: [],
              CENA:  [0],
              STATUS: ['', [<any>Validators.required, <any>Validators.minLength(1)]]
         });

         if(this.rez!==undefined){
            this.myForm.setValue(this.rez)
         }
     }else{
       this.router.navigate(['./prijava']);
     }
    }

IdTrajanjaRezervacije:number;
idCar:number;
extraCena:number;
timechange(e){
  this.IdTrajanjaRezervacije=e;
  if(this.idCar!=undefined){
  this.dataService.getCene(this.idCar,this.IdTrajanjaRezervacije).subscribe(
    data => {
      var cene = data["_body"];
      let x = cene.split("|");
      this.cena=x[0];
      this.extraCena=x[1];
      console.log(this.cena)
    }
  );
}
}
carchange(e){
  this.idCar=e;
  if(this.IdTrajanjaRezervacije!=undefined){
  this.dataService.getCene(this.idCar,this.IdTrajanjaRezervacije).subscribe(
    data => {
      var cene = data["_body"];
      let x = cene.split("|");
      this.cena=x[0];
      this.extraCena=x[1];
    }
  );
  }
}


  save(rez: Rezervacija, isValid: boolean) {
    if (this.myForm.valid) {
        if(this.dataService.getRezervacija()!=undefined){
          this.dataService.updateRezervacija(rez).subscribe(
            data => { if (data["_body"].indexOf('updated')>=0) { this.router.navigate(['korisnik']); } else {alert("Greska prilikom izmene rezervacije!!!") }
            }
          );
        }else{
          rez.ID_KLIJENTA=this.dataService.getIdUser();
          rez.DATUM_REZARVACIJE=new Date().toISOString().substring(0,10);
          this.dataService.addRezervacija(rez).subscribe(
            data => { if (data["_body"].indexOf('ok')>=0) { this.router.navigate(['korisnik']); } else {alert("Greska prilikom unosa nove rezervacije!!!") }
            }
          );
      }
    }else{
      alert("Popunite ispravno sva polja!")
    }
  }


  odjava(){
    this.router.navigate(['/']);
  }

  addRezervacija(){
    this.dataService.postRezervacija(undefined);
     this.router.navigate(['./korisnik/add-edit-rezervacija']);
  }

}
@Injectable()
export class Cena {
    constructor(
        public ID_CENA: number,
        public ID_TARIFNA_KLASA: number,
        public ID_TRAJANJA: number,
        public CENA_PO_EXTRA_KM: number,
        public OSNOVNA_CENA: string
    ){}
}
