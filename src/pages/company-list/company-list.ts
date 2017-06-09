import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CompaniesService} from '../../app/services/companies.service';
import { EditCompanyPage } from '../edit-company/edit-company';
import { LoadingController } from 'ionic-angular';
import { AddCompanyPage } from '../add-company/add-company';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-company-list',
  templateUrl: 'company-list.html',
})
export class CompanyListPage {

  private companies: any;
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private companiesService: CompaniesService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.presentLoadingDefault();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyList Page');
    this.companiesService.getCompanies().subscribe(response => this.companies = response);
    this.loading.dismiss();
  }

  editCompany(company){
    this.navCtrl.push(EditCompanyPage, {
      company: company
    });
  }

  addCompany(){
    this.navCtrl.push(AddCompanyPage);
  }

  deleteCompany(company){
    this.presentLoadingDefault();
    this.companiesService.deleteCompany(company).subscribe(response => {
      console.log(response);
      this.loading.dismiss();
      this.presentAlert('Nice Job!', 'Company has been successfully deleted.');
      this.navCtrl.popToRoot();
    });
  }

  presentAlert(title, subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
