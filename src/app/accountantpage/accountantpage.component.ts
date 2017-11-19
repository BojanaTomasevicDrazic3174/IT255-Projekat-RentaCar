import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-accountantpage',
  templateUrl: './accountantpage.component.html',
  styleUrls: ['./accountantpage.component.css']
})
export class AccountantpageComponent implements OnInit {


  constructor(private router: Router,private dataSer:DataService) { }

  rezervacije = undefined;
  isAuth: String;

  ngOnInit() {
    this.dataSer.postRezervacija(undefined);
    if(this.dataSer.getIdUser()!==undefined){
    this.dataSer.getRezervacijeAll().subscribe(
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

  izmeni(rez){
    this.dataSer.postRezervacija(rez);console.log(rez)
    this.router.navigate(['./racunovodja/add-edit-nalog/'+rez.ID_REZERVACIJA]);
  }


  odjava(){
    this.router.navigate(['/']);
  }
}


@Injectable()
export class Nalog {
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
