import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login';

const adminRoutes: Routes = [
    { path: 'admin/login',  component: LoginComponent },
  ];

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
        RouterModule.forChild(adminRoutes),
    ],
    exports: [LoginComponent],
  })
  export class AdminModule { }
