import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  constructor(private router: Router,private dataSer:DataService) { }

  isAuth: String;
  rezervacije = undefined;

  ngOnInit() {
    this.dataSer.postRezervacija(undefined);
    if(this.dataSer.getIdUser()!==undefined){
    this.dataSer.getRezervacije(this.dataSer.getIdUser()).subscribe(
         data => {
           this.rezervacije = data.json();
         }
       );
      this.isAuth = "yes";
    }else{
      this.router.navigate(['./prijava']);
    }
  }

  obrisi(rez){
    if(confirm("Da li ste sigurni da zelite obrisati rezervaciju "+rez.ID_REZERVACIJA)) {
    this.dataSer.deleteRezervacija(rez.ID_REZERVACIJA).subscribe(
         data => {
           this.dataSer.getRezervacije(this.dataSer.getIdUser()).subscribe(
                data => {
                  this.rezervacije = data.json();
                }
              );

         }
       );
     }
  }


  addRezervacija(){
     this.router.navigate(['/','korisnik/add-edit-rezervacija']);
  }

linkRezervacije(){
   this.router.navigate(['korisnik']);
}

  izmeni(rez){
    this.dataSer.postRezervacija(rez);
    this.router.navigate(['./korisnik/add-edit-rezervacija/'+rez.ID_REZERVACIJA]);
  }


  odjava(){
    this.router.navigate(['/']);
  }

}

@Injectable()
export class Rezervacija {
    constructor(
        public ID_REZERVACIJA: number,
        public ID_AUTOMOBIL: number,
        public ID_KLIJENTA: number,
        public ID_TRAJANJA: number,
        public DATUM_REZARVACIJE: string,
        public DATUM_POCETKA: string,
        public DATUM_ZAVRSETKA: string,
        public VALIDNA_REZERVACIJA: boolean,
        public NACIN_REZERVISANJA: string,
        public PREDJENA_KILOMETRAZA: number,
        public CENA: number,
        public STATUS: string
    ){}
}
