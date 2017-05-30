import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CompaniesService} from '../../app/services/companies.service';

@IonicPage()
@Component({
  selector: 'page-company-list',
  templateUrl: 'company-list.html',
})
export class CompanyListPage {

  companies: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private companiesService: CompaniesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyList Page');
    this.companiesService.getCompanies().subscribe(response => this.companies = response);
  }

}
