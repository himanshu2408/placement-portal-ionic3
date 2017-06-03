import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterStudentForCompanyPage } from '../register-student-for-company/register-student-for-company'

@IonicPage()
@Component({
  selector: 'page-registered-students',
  templateUrl: 'registered-students.html',
})
export class RegisteredStudentsPage {

  private company: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
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
}
