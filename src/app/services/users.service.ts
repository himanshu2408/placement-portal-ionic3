import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService{

  private baseUrl = 'http://192.168.1.3:3000/api/students';
  constructor(private http: Http) { }
  getUsers(): Promise<any> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
