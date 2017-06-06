import {Injectable} from '@angular/core';

@Injectable()
export class StaticService{

  private Url = 'http://192.168.43.139:3000/';
  constructor() { }
  getUrl (){
    return this.Url;
  }
}
