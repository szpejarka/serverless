import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Client } from '../service/client.model';

@Component({
  selector: 'client-list',
  templateUrl: './template.html'
})
export class ClientListPage implements OnInit {

  clientService: ClientService;
  clients: Client[];

  constructor(clientService: ClientService) 
  { 
    this.clientService = clientService;
  }

  ngOnInit() {
    this.clients = this.clientService.getAll();
  }


}