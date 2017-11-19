import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Car } from './adminpage/adminpage.component';
import { Nalog } from './accountantpage/accountantpage.component';
import { Klijent } from './registracija/registracija.component';
import { Rezervacija } from './korisnik/korisnik.component';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8080/RentACarAngular2Project/php/getCars.php', {
            headers: headers
          });
  }

  prijava(username,password){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8080/RentACarAngular2Project/php/login.php?USERNAME='+username+'&PASSWORD='+password, {
            headers: headers
          });
  }

  getCars(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8080/RentACarAngular2Project/php/getCars.php', {
            headers: headers
          });
  }

  addCar(car: Car){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post
      ('http://localhost/RentACarAngular2Project/php/addCar.php', car, { headers: headers })
    }

  updateCar(car: Car){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post('http://localhost:8080/RentACarAngular2Project/php/updateCar.php', car, { headers: headers })
    }

  deleteCar(id){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8080/RentACarAngular2Project/php/deleteCar.php?id='+id, {
            headers: headers
          });
  }

addKlijent(klijent: Klijent){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post('http://localhost:8080/RentACarAngular2Project/php/addKlijent.php',klijent, {
          headers: headers
        });
}

getRezervacije(id){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post('http://localhost:8080/RentACarAngular2Project/php/getRezervacije.php?id_klijenta='+id, {
          headers: headers
        });
}

getRezervacijeAll(){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post('http://localhost:8080/RentACarAngular2Project/php/getRezervacijeAll.php', {
          headers: headers
        });
}

addRezervacija(rez: Rezervacija){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8080/RentACarAngular2Project/php/addRezervacija.php', rez, { headers: headers })
  }

updateRezervacija(rez: Rezervacija){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8080/RentACarAngular2Project/php/updateRezervacija.php', rez, { headers: headers })
  }

deleteRezervacija(id){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post('http://localhost:8080/RentACarAngular2Project/php/deleteRezervacija.php?id='+id, {
          headers: headers
        });
}

getCene(idCar,idTipTrajanja){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post('http://localhost:8080/RentACarAngular2Project/php/getCene.php?idCar='+idCar+'&idTipTrajanja='+idTipTrajanja, {
          headers: headers
        });
}

  private car:Car;
  private nalog:Nalog;
  private idUser:undefined;
  private rezervacija:Rezervacija;

  postCar(car){
   this.car=car;
  }
  getCar(){
    return this.car;
  }
  postNalog(nalog){
   this.nalog=nalog;
  }
  getNalog(){
    return this.nalog;
  }

  postIdUser(idUser){
   this.idUser=idUser;
  }
  getIdUser(){
    return this.idUser;
  }

  postRezervacija(rezervacija){
   this.rezervacija=rezervacija;
  }
  getRezervacija(){
    return this.rezervacija;
  }
}
