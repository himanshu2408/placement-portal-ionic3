import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserListPage } from '../user-list/user-list';
import { CompanyListPage } from '../company-list/company-list';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  manageStudents(){
    this.navCtrl.push(UserListPage);
  }

  manageCompanies(){
    this.navCtrl.push(CompanyListPage);
  }
}
