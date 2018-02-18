import { NgModule } from "@angular/core";
import { ClientListPage } from "./list/page";
import { ClientService } from "./service/client.service";
import { Routes, RouterModule } from "@angular/router";

const clientRoutes: Routes = [
    { path: 'client',  component: ClientListPage },
  ];

@NgModule({
    declarations: [
      
      ClientListPage
    ],
    imports: [
        RouterModule.forChild(clientRoutes),
        Forms
    ],
    exports: [RouterModule],
    providers: [ClientService]
  })
  export class ClientModule { }