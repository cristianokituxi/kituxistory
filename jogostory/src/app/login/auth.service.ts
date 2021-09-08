import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';


@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'kituxi@email.com' &&
      usuario.senha === '123456') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['./inicio']);

    } else {
      this.usuarioAutenticado = false;
      alert("Senha ou E-mail incorerreto. por favor tente outra vez! ")

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
