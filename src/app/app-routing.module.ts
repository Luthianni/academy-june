import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ListaComponent } from './components/lista/lista.component';
import { PerfilComponent } from './components/perfil/perfil.component';

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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
