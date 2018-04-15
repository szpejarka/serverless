import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

const adminRoutes: Routes = [
    { path: 'admin/login',  component: LoginComponent },
  ];

@NgModule({
    declarations: [
      LoginComponent,
      UserLoginComponent,
      UserProfileComponent
    ],
    imports: [
        RouterModule.forChild(adminRoutes),

    ],
    exports: [],
  })
  export class AdminModule { }
