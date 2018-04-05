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
import { ClientFeatureComponent } from './client-feature/client-feature.component';

const clientRoutes: Routes = [
  { path: 'client', component: ClientFeatureComponent, children: [
    { path: '',  component: ClientListComponent,/* canActivate: [AuthGuard]*/ children: [
      { path: ':id', component: ClientDetailComponent, /*canActivate: [AuthGuard]*/}
    ]}
  ]}
];

@NgModule({
    declarations: [
      ClientListComponent,
      ClientListItemComponent,
      ClientDetailComponent,
      ClientFeatureComponent
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
