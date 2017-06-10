import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompaniesService } from '../../app/services/companies.service';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-company',
  templateUrl: 'add-company.html',
})
export class AddCompanyPage {

  private newCompany = {
    name : '',
    profile: '',
    ctc: '',
    address: ''
  };

  private loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private companiesService: CompaniesService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCompanyPage');
  }

  saveCompany(){
    this.presentLoadingDefault();
    this.companiesService.addCompany(this.newCompany).subscribe(response => {
      console.log(response);
      this.loading.dismiss();
      this.navCtrl.pop
      this.presentToast("New Company has been successfully added.");
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }
}
