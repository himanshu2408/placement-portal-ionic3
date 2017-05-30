import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CompaniesService{

  private baseUrl = 'http://192.168.1.3:3000/api/companies';
  constructor(private http: Http) { }
  getCompanies(): Observable<any> {
    return this.http
      .get(this.baseUrl)
      .map(response => response.json());
  }
}
