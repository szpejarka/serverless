import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginPage } from './pages/admin/login/login';
import { ClientListPage } from './pages/client/list/page';

const appRoutes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'client/list', component: ClientListPage },
  { path: '*', redirectTo: '/login'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    ClientListPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
