import { NgModule } from '@angular/core';
import { ClientListComponent } from './list/client-list-component';
import { ClientService } from './service/client.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ClientListItemComponent } from './list/client-list-item-component';
import { ClientDetailComponent } from './detail/client-detail-component';
import { AuthGuard } from '../auth-guard-service';

const clientRoutes: Routes = [
  { path: 'client/:id', component: ClientDetailComponent, canActivate: [AuthGuard]},
  { path: 'client',  component: ClientListComponent, canActivate: [AuthGuard]}
  ];

@NgModule({
    declarations: [
      ClientListComponent,
      ClientListItemComponent,
      ClientDetailComponent
    ],
    imports: [
      BrowserModule,
        FormsModule,
        RouterModule.forChild(clientRoutes),
    ],
    exports: [RouterModule],
    providers: [ClientService,AuthGuard]
  })
  export class ClientModule { }
