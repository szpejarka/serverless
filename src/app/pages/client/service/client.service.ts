import { Injectable } from '@angular/core';
import { Client } from './client.model';

@Injectable()
export class ClientService {

  list: Client[] = [
    { ID: 0 , Name: 'Client 1', Address: 'Oak Park 1', Description: ''},
    { ID: 1 , Name: 'Client 2', Address: 'Oak Park 2', Description: ''}
  ];


  constructor() { }

  getAll(): Client[] {
    return this.list;
  }

  get(id: number): Client {
    return this.list[id];
  }
}
