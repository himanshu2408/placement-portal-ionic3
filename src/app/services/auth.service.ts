import {Injectable} from '@angular/core';
import { Headers, Http} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class AuthService{

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) { }

  login(){

  }

  signup(){

  }

}
