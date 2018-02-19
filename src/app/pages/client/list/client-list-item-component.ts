import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../service/client.model';

@Component({
  selector: 'app-client-list-item',
  templateUrl: './client-list-item-template.html'
})
export class ClientListItemComponent implements OnInit {

  @Input() client: Client;

  constructor() {
  }

  ngOnInit() {
  }
}
