import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BtnPinkComponent } from './btn-pink/btn-pink.component';
import { InputComponent } from './input/input.component';
import { LogoComponent } from './logo/logo.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { UpdateuserPageComponent } from './updateuser-page/updateuser-page.component'

@NgModule({
  declarations: [
    AppComponent,
    BtnPinkComponent,
    InputComponent,
    LogoComponent,
    RegisterPageComponent,
    LoginPageComponent,
    MainComponent,
    UpdateuserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
