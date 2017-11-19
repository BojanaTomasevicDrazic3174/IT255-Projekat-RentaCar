import { Component } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './mainpage/mainpage.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AccountantpageComponent } from './accountantpage/accountantpage.component';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { AddEditCarComponent } from './adminpage/add-edit-car/add-edit-car.component';
import { AddEditRezervacijaComponent } from './korisnik/add-edit-rezervacija/add-edit-rezervacija.component';
import { AddEditNalogComponent } from './accountantpage/add-edit-nalog/add-edit-nalog.component';

export const appRoutes:Routes  = [
  {  path:'',   component: MainPageComponent},
  {  path:'home', component: MainPageComponent },
  {  path:'galerija', component: GalerijaComponent },
  {  path:'kontakt', component: KontaktComponent },
  {  path:'prijava', component: PrijavaComponent },
  {  path:'registracija', component: RegistracijaComponent },
  {  path:'adminpage', component: AdminpageComponent},
  {  path:'racunovodja', component: AccountantpageComponent},
  {  path:'korisnik', component: KorisnikComponent},
  {  path:'adminpage/add-edit-car/:id', component: AddEditCarComponent},
  {  path:'adminpage/add-edit-car', component: AddEditCarComponent},
  {  path:'korisnik/add-edit-rezervacija/:id', component: AddEditRezervacijaComponent},
  {  path:'korisnik/add-edit-rezervacija', component: AddEditRezervacijaComponent},
  {  path:'racunovodja/add-edit-nalog/:id', component: AddEditNalogComponent}
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
