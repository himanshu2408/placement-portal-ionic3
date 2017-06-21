import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterStudentForCompanyPage } from '../register-student-for-company/register-student-for-company'
import { CompaniesService } from '../../app/services/companies.service';
import { ToastController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registered-students',
  templateUrl: 'registered-students.html',
})
export class RegisteredStudentsPage {

  private company: any;
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private companiesService: CompaniesService
  ) {
    this.company = navParams.get('company');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisteredStudentsPage');
  }

  registerStudent(company){
    this.navCtrl.push(RegisterStudentForCompanyPage, {
      company: company
    })
  }

  unregisterStudent(student, company){
    this.presentLoadingDefault();
    this.companiesService.unregisterStudent(student, company).subscribe(response =>{
        this.loading.dismiss();
        if(response.status === 200) {
          this.navCtrl.popToRoot();
          this.presentToast('Student has been successfully unregistered.');
        }
        else{
          this.presentToast("Something went wrong, please try again...");
        }
    },
      error => {
        this.loading.dismiss();
        this.presentToast("Connection to server failed. Please try again.");
        console.log(error);
      }
    );
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
