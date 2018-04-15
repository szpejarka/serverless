import { Injectable } from '@angular/core';
import { User } from '@firebase/auth-types';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  user: User = null;

  constructor(private af: AngularFireAuth,
              private db: AngularFireDatabase,
              private router:Router) {

            af.authState.subscribe((user) => {
              this.user = user;
            });
          }
}
