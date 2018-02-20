import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Client } from '../service/client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail-template.html'
})
export class ClientDetailComponent implements OnInit {

  clientService: ClientService;
  @Input() client: Client;

  constructor(clientService: ClientService) {
    this.clientService = clientService;
  }

  ngOnInit() {
  }
}
