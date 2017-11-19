import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  public myForm: FormGroup;
  private sub: any;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder,private dataService : DataService, private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.myForm = this._fb.group({
        ID_KLIJENTA: [''],
        IME_KLIJENTA: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        PREZIME_KLIJENTA: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        ADRESA_KLIJENTA: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        DATUM_RODJENJA: ['', [<any>Validators.required, <any>Validators.minLength(8)]],
        TELEFON: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        EMAIL: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        USERNAME: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        PASSWORD: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        REPASSWORD: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        tip: ['']
   });
  }

  save(klijent: Klijent, isValid: boolean) {
    if(klijent.PASSWORD !== klijent.REPASSWORD){
      alert("Ponovite istravno unetu sifru!")
    }else{
    if (this.myForm.valid) {
      klijent.tip ="korisnik"
          this.dataService.addKlijent(klijent).subscribe(
            data => { if (data["_body"].indexOf('ok')>=0) { this.router.navigate(['prijava']); alert("Uspesno ste se registrovali! Prijavite se na sajt!"); } else {alert("Greska prilikom unosa novog auta!!!") }
            }
          );
    }else{
      alert("Popunite ispravno sva polja!")
    }
  }
  }

}

@Injectable()
export class Klijent {
    constructor(
        public ID_KLIJENTA: number,
        public IME_KLIJENTA: string,
        public PREZIME_KLIJENTA: string,
        public ADRESA_KLIJENTA: string,
        public DATUM_RODJENJA: string,
        public TELEFON: string,
        public EMAIL: string,
        public USERNAME: string,
        public PASSWORD: string,
        public REPASSWORD: string,
        public tip: string
    ){}
}
