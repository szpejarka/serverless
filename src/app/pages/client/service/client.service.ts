import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Client } from './client.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {

  db: AngularFireDatabase;
  client: Observable<Client[]>;

  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.client = this.db.list('client').snapshotChanges().map( vs => {
        return vs.map( v => {
          const c = v.payload.val() as Client;
          c.ID = v.key;
          return c;
          }
        );
      }
    );
  }

  getAll(): Observable<Client[]> {
    return  this.client;
    }

  get(id: string): Observable<Client> {
    return this.clientRef(id).valueChanges() as Observable<Client>;
  }

  save(client: Client) {
    this.clientRef(client.ID).update(client);
  }

  add(client: Client): string {
    const cr = this.db.list('client').push({});
    client.ID = cr.key;
    cr.update(client);
    return client.ID;
  }
  remove(client: Client) {
    this.clientRef(client.ID).remove();
  }

  private clientRef(id: string) {
    return this.db.object('client/' + id);
  }

}
