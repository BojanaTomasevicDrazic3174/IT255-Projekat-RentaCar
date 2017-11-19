import { Component, OnInit, Input,Output,  } from '@angular/core';
import {DataService} from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private router: Router,private dataSer:DataService) { }
  ngOnInit() {

  }

  prijava(username, password){
   this.dataSer.prijava(username.value, password.value).subscribe(
        data => {
          var korisnik = data["_body"];
          if (data["_body"].indexOf("--")>=0){
            alert(data["_body"])
           } else {
             let x = korisnik.split("|");
            if(x[0]==='admin'){
              this.router.navigate(['./adminpage']);
            }else if(x[0]==='racun'){
              this.router.navigate(['./racunovodja']);
            } else if(x[0]==='korisnik'){
              this.router.navigate(['./korisnik']);
            }
           this.dataSer.postIdUser(x[1]);
           }
        }
      );
 }


}
