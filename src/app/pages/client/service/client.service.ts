import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Client } from './client.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ClientService {

  list: Client[] = [
    { ID: "c1" , Name: 'Client 1', Address: 'Oak Park 1', Description: ''},
    { ID: "c2" , Name: 'Client 2', Address: 'Oak Park 2', Description: ''}
  ];
  db: AngularFireDatabase;
  client: Observable<Client[]>;
 
  constructor(db: AngularFireDatabase) { 
    this.db = db;
    this.client = this.db.list('client').snapshotChanges().map( vs => 
      {
        return vs.map( v => {
          var c = v.payload.val() as Client;
          c.ID = v.key;
          return c;
          }
        )
      } 
    );
  }
 
  getAll(): Observable<Client[]> {
    return  this.client;
    //return Observable.of(this.list); 
    }

  get(id: string): Observable<Client> {
    return this.db.object('client/' + id).valueChanges() as Observable<Client>;
  }

  save(client: Client)
  {
    const clientRef = this.db.object('client/' + client.ID);
    clientRef.update(client);
  }
}
