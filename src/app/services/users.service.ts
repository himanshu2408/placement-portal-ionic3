import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{

  private baseUrl = 'http://192.168.1.3:3000/api/students';
  private headers = new Headers({'Content-Type': 'application/json'});
  private updateUrl : any;
  constructor(private http: Http) { }
  getUsers(): Observable<any> {
    return this.http
      .get(this.baseUrl)
      .map(response => response.json());
  }

  update(user): Observable<any>{
    this.updateUrl = this.baseUrl+"/"+user._id;
    return this.http
      .put(this.updateUrl, user , {headers: this.headers})
      .map(response =>response);
  }

  addUser(newUser): Observable<any>{
    return this.http
      .post(this.baseUrl, newUser, {headers: this.headers})
      .map(response => response);
  }

  deleteUser(user): Observable<any>{
    this.updateUrl = this.baseUrl+"/"+user._id;
    return this.http
      .delete(this.updateUrl, {headers: this.headers})
      .map(response => response);
  }
}
