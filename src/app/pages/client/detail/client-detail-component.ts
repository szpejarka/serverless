import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ClientService } from '../service/client.service';
import { Client } from '../service/client.model';
import { ObservableInput } from 'rxjs/Observable';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail-template.html'
})
export class ClientDetailComponent implements OnInit {

  clientService: ClientService;
  @Input() client: Observable<Client>;
  id: string;
  name: string;
  desc: string;
  address: string;


  constructor(clientService: ClientService,  private route: ActivatedRoute,
    private router: Router, private location: Location) {
    this.clientService = clientService;
  }

  ngOnInit() {
//    this.client = this.clientService.get(0);
    this.route.params.subscribe(
      (params) => {
        this.subscribeData(params['id']);
      }
    );
  }

  private subscribeData(id: string) {
    this.id = id;
    if (this.id !== 'add') {
      this.client = this.clientService.get(this.id);
      this.client.subscribe((x) => {
        this.name = x.Name;
        this.address = x.Address;
        this.desc = x.Description;
      });
    } else {
      const c = new Client();
      this.client = Observable.of(c);
    }
  }

  save() {
    if (this.id === 'add') {
      const id = this.clientService.add({ID: this.id, Name: this.name, Description: this.desc, Address: this.address });
    } else {
      this.clientService.save({ID: this.id, Name: this.name, Description: this.desc, Address: this.address });
    }
    this.location.back();
  }

}
