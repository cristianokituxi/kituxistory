import { DawnloadComponent } from './dawnload/dawnload.component';

import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JogosComponent } from './jogos/jogos.component';
import { AplicacoesComponent } from './aplicacoes/aplicacoes.component';


const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'login', component: LoginComponent},
{ path: 'inicio', component: InicioComponent},
{ path: 'aplicacoes', component: AplicacoesComponent },
{ path: 'jogos', component: JogosComponent},
{ path: 'dawnload', component: DawnloadComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
