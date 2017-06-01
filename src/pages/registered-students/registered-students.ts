import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-registered-students',
  templateUrl: 'registered-students.html',
})
export class RegisteredStudentsPage {

  private registeredStudents: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.registeredStudents = navParams.get('registeredStudents');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisteredStudentsPage');
  }

  registerStudent(){

  }
}
