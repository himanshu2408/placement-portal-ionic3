import {Injectable} from '@angular/core';
import { Headers, Http} from '@angular/http';
import {Observable} from "rxjs";
import { StaticService } from './static.service';

@Injectable()
export class AuthService{

  private loginUrl = this.staticService.getUrl()+'api/login';
  private logoutUrl = this.staticService.getUrl()+'api/logout';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http,
    private staticService: StaticService
  ) { }

  login(user): Observable<any>{

    return this.http
      .post(this.loginUrl, user, {headers: this.headers})
      .map(response => response);
  }

  logout(): Observable<any>{
    return this.http
      .get(this.logoutUrl, {headers: this.headers})
      .map(response =>response);
  }

  signup(){

  }

}
