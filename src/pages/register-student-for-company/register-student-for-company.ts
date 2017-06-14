import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompaniesService } from '../../app/services/companies.service';
import { ToastController, LoadingController } from 'ionic-angular';
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
    private toastCtrl: ToastController,
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
    this.presentLoadingDefault();
    let newStudent = {
        name: this.registerStudentForm.value.name,
        department: this.registerStudentForm.value.department,
        rollno: this.registerStudentForm.value.rollno,
        cgpa: this.registerStudentForm.value.cgpa
      };
    this.companiesService.registerStudent(this.company, newStudent).subscribe(response => {
      console.log(response);
      this.loading.dismiss();
        if(response.status === 200) {
          this.navCtrl.popToRoot();
          this.presentToast('New Student record has been successfully added.');
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
