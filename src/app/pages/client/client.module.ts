import { NgModule } from '@angular/core';
import { ClientListComponent } from './list/client-list-component';
import { ClientService } from './service/client.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../../core/core.module';
import { AuthGuard } from '../../core/auth.guard';
import { ClientListItemComponent } from './list/client-list-item-component';
import { ClientDetailComponent } from './detail/client-detail-component';
import { ClientFeatureComponent } from './client-feature/client-feature.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const clientRoutes: Routes = [
  { path: 'client', component: ClientFeatureComponent,
    children: [
      { path: '',  component: ClientListComponent,  canActivate: [AuthGuard] },
      { path: ':id', component: ClientDetailComponent, canActivate: [AuthGuard]}
    ]
  }
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
        CoreModule,
        RouterModule.forChild(clientRoutes),
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatIconModule
     ],
    exports: [RouterModule],
    providers: [ClientService]
  })
  export class ClientModule { }
