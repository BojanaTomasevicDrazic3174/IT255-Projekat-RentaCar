import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './mainpage/mainpage.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { routing } from './app.routes';
import { DataService } from './data.service';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AccountantpageComponent } from './accountantpage/accountantpage.component';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { AddEditCarComponent } from './adminpage/add-edit-car/add-edit-car.component';
import { AddEditRezervacijaComponent } from './korisnik/add-edit-rezervacija/add-edit-rezervacija.component';
import { AddEditNalogComponent } from './accountantpage/add-edit-nalog/add-edit-nalog.component'
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GalerijaComponent,
    KontaktComponent,
    PrijavaComponent,
    RegistracijaComponent,
    AdminpageComponent,
    AccountantpageComponent,
    KorisnikComponent,
    AddEditCarComponent,
    AddEditRezervacijaComponent,
    AddEditNalogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
