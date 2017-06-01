import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CompaniesService{

  private baseUrl = 'http://192.168.1.3:3000/api/companies';
  private headers = new Headers({'Content-Type': 'application/json'});
  private updateUrl : any;

  constructor(private http: Http) { }

  getCompanies(): Observable<any> {
    return this.http
      .get(this.baseUrl)
      .map(response => response.json());
  }

  update(company): Observable<any>{
    this.updateUrl = this.baseUrl+"/"+company._id;
    return this.http
      .put(this.updateUrl, company , {headers: this.headers})
      .map(response =>response);
  }

  addCompany(newCompany): Observable<any>{
    return this.http
      .post(this.baseUrl, newCompany, {headers: this.headers})
      .map(response => response);
  }

  deleteCompany(company): Observable<any>{
    this.updateUrl = this.baseUrl+"/"+company._id;
    return this.http
      .delete(this.updateUrl, {headers: this.headers})
      .map(response => response);
  }

}
