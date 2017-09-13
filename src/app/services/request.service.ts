import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('data/mock.json').map(res => res.json());
  }

}
