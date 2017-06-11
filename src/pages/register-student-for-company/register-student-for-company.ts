import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompaniesService } from '../../app/services/companies.service';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register-student-for-company',
  templateUrl: 'register-student-for-company.html',
})
export class RegisterStudentForCompanyPage {

  private company: any;
  public registerStudentForm : FormGroup;
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private companiesService: CompaniesService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public formBuilder: FormBuilder
  ) {
    this.company = navParams.get('company');
    this.registerStudentForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      department: ['', Validators.compose([Validators.required])],
      rollno: ['', Validators.compose([Validators.required])],
      cgpa: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterStudentForCompanyPage');
  }

  saveStudent(){
    let newStudent = {
        name: this.registerStudentForm.value.name,
        department: this.registerStudentForm.value.department,
        rollno: this.registerStudentForm.value.rollno,
        cgpa: this.registerStudentForm.value.cgpa
      };
    this.presentLoadingDefault();
    this.companiesService.registerStudent(this.company, newStudent).subscribe(response => {
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
