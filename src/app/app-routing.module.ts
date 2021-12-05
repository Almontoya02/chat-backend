import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UpdateuserPageComponent } from './updateuser-page/updateuser-page.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo:"login"
  },
  {
    path:"register",
    component: RegisterPageComponent,
  },
  {
    path:"login",
    component: LoginPageComponent,
  },
  {
    path:"main",
    component: MainComponent,
  },
  {
    path:"update-user",
    component: UpdateuserPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
