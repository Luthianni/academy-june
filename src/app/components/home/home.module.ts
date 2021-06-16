import { ListaComponent } from './../lista/lista.component';
import { CardComponent } from './../card/card.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CardComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,  
    FormsModule,
  ]
})
export class HomeModule { }
