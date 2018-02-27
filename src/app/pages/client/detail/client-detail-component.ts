import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ClientService } from '../service/client.service';
import { Client } from '../service/client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail-template.html'
})
export class ClientDetailComponent implements OnInit {

  clientService: ClientService;
  @Input() client: Client;

  constructor(clientService: ClientService,  private route: ActivatedRoute,
    private router: Router) {
    this.clientService = clientService;
  }

  ngOnInit() {
//    this.client = this.clientService.get(0);
    this.route.params.subscribe(
      (params) =>
      {
        this.client = this.clientService.get(parseInt(params['id'], 10) );
      }
    );
    /*
    this.client = this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.clientService.get(parseInt(params.get('id'),10));
    */
  }
}
