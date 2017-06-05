import {Injectable} from '@angular/core';
import { Headers, Http} from '@angular/http';
import {Observable} from "rxjs";
import { StaticService } from './static.service';

@Injectable()
export class AuthService{

  private loginUrl = this.staticService.getUrl()+'api/login';
  private headers = new Headers({'Content-Type': 'application/json'});
  private isAuthenticated = false;

  constructor(
    private http: Http,
    private staticService: StaticService
  ) { }

  login(user): Observable<any>{

    return this.http
      .post(this.loginUrl, user, {headers: this.headers})
      .map(response => response);
  }

  loggedIn(){
    this.isAuthenticated = true;
  }

  isLoggedIn(){
    return this.isAuthenticated;
  }

  signup(){

  }

}
