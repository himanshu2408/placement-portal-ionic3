import {Injectable} from '@angular/core';

@Injectable()
export class StaticService{

  private Url = 'http://192.168.1.4:3000/api/';
  constructor() { }
  getUrl (){
    return this.Url;
  }
}
