import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: Http) { }

  getData() {
    // baseUrl = base url from services by enviroment
    return this.http.get('data/mock.json').map(res => res.json());
  }

}
