import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { StaticService } from './static.service';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{

  private Url = this.staticService.getUrl();
  private baseUrl = this.Url+ 'api/students';
  private headers = new Headers({'Content-Type': 'application/json'});
  private updateUrl : any;
  constructor(
    private http: Http,
    private staticService: StaticService
  ) { }
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
