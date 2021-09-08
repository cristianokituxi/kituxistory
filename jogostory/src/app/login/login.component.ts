import { Component, OnInit } from '@angular/core';
import{AuthService} from './auth.service';
import{ Usuario }  from './usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
 fazerLogin(){
   this.authService.fazerLogin(this.usuario);

 }
}
