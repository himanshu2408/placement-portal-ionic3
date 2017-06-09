import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompaniesService } from '../../app/services/companies.service';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register-student-for-company',
  templateUrl: 'register-student-for-company.html',
})
export class RegisterStudentForCompanyPage {

  private company: any;
  private newStudent = {
    name: '',
    department: '',
    rollno: '',
    cgpa: ''
  };
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private companiesService: CompaniesService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
    this.company = navParams.get('company');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterStudentForCompanyPage');
  }

  saveStudent(){
    this.presentLoadingDefault();
    this.companiesService.registerStudent(this.company, this.newStudent).subscribe(response => {
      console.log(response);
      this.loading.dismiss();
      this.navCtrl.popToRoot();
      this.presentAlert('Nice Job!', 'New Student has been added successfully.');
    })
  }

  presentAlert(title, subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }
}
