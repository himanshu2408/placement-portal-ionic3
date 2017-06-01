import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompaniesService } from '../../app/services/companies.service';
import { AlertController } from 'ionic-angular';
import { RegisteredStudentsPage } from '../registered-students/registered-students';

@IonicPage()
@Component({
  selector: 'page-edit-company',
  templateUrl: 'edit-company.html',
})
export class EditCompanyPage {

  private company: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private companiesService: CompaniesService,
    private alertCtrl: AlertController
  ) {
    this.company = navParams.get('company');
    console.log(this.company);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCompanyPage');
  }

  save() {
    this.companiesService.update(this.company)
      .subscribe(response => {
        this.presentAlert();
        this.navCtrl.pop();
      });
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nice Job!',
      subTitle: 'Company Details have been updated successfully.',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  showRegisteredStudents(registeredStudents){
    console.log(registeredStudents);
    this.navCtrl.push(RegisteredStudentsPage, {
      registeredStudents: registeredStudents
    });
  }
}
