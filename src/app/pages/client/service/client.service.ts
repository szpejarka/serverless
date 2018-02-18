import { Injectable } from '@angular/core';
import { Client } from './client.model';

@Injectable()
export class ClientService {

  constructor() { }

  getAll() : Client[]
  {
    var list: Client[] = [
      { Name: "Client 1", Address: "Oak Park 1", Description: ""},
      { Name: "Client 2", Address: "Oak Park 2", Description: ""}
    ];
    return list;
  }
}