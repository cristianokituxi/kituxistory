import { AplicacoesComponent } from './aplicacoes/aplicacoes.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{ AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { DawnloadComponent } from './dawnload/dawnload.component';
import { AccordionModule } from 'ngx-bootstrap/accordion'
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import  {  CarouselModule  }  from  'ngx-owl-carousel-o' ;
import { JogosComponent } from './jogos/jogos.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    DawnloadComponent,
    AplicacoesComponent,
    JogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    AlertModule,
    CarouselModule,
    ButtonsModule,
  ],
  providers: [
    AuthService,
    AlertConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
