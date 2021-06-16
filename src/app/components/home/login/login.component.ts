import { Component, OnInit } from '@angular/core';

import { AutenticacaoService } from '../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario='';
  senha='';

  constructor( private authService:AutenticacaoService) { };

  ngOnInit(): void {
  login() {
    this.authService.autenticar(this.usuario,this.senha).subscribe(() => {
        console.log('Autenticado com sucesso');
      },
      (error) =>{
        alert('Usuário ou Senha Inválido');
        console.log(error);
      }
    );
  }  
}
function Usuário(Usuário: any, ou: any, Senha: any, inválido: any) {
  throw new Error('Function not implemented');
}
