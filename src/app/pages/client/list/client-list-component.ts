import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Client } from '../service/client.model';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list-template.html'
})
export class ClientListComponent implements OnInit {

  clientService: ClientService;
  clients: Observable<Client[]>; 

  constructor(clientService: ClientService) {
    this.clientService = clientService;
  }

  ngOnInit() {
    this.clients = this.clientService.getAll();
  }
}
