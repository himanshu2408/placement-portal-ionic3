import {Injectable} from '@angular/core';

@Injectable()
export class StaticService{

  private Url = 'http://192.168.1.2:3000/';
  constructor() { }
  getUrl (){
    return this.Url;
  }
}
