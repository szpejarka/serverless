import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { CoreModule } from '../../core/core.module';

const adminRoutes: Routes = [
    { path: 'admin/login',  component: UserLoginComponent },
  ];

@NgModule({
    declarations: [
      LoginComponent,
      UserLoginComponent,
      UserProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes),
        CoreModule,
    ],
    exports: [],
  })
  export class AdminModule { }
