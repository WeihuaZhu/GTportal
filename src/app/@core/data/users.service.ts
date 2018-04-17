import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'Donald Trump', picture: 'assets/images/trump.jpg' },
    eva: { name: 'George P. Burdellr', picture: 'assets/images/cover2.jpg' },
    jack: { name: 'Chengxi Yao', picture: 'assets/images/ycx.jpeg' },
    lee: { name: 'Haiyue Yin', picture: 'assets/images/yhy.jpeg' },
    alan: { name: 'Weihua Zhu', picture: 'assets/images/zwh.jpeg' },
    kate: { name: 'Bud Peterson', picture: 'assets/images/bp.jpg' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
