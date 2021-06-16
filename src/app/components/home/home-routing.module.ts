import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './../perfil/perfil.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homedir } from 'os';
import { CardComponent } from '../card/card.component';
import { ListaComponent } from '../lista/lista.component';

const routes: Routes = [
  {
    path: '', component: CardComponent
  },
  {
    path: 'lista', component: ListaComponent
  },
  {
    path: 'perfil', component: PerfilComponent
  },
  {
    path:"home", component: HomeComponent
  },
  {
    path:"login", component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
