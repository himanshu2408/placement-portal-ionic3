import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';
import { ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {

  private user: any;
  public editStudentForm : FormGroup;
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usersService: UsersService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public formBuilder: FormBuilder
  ) {
    this.user = navParams.get('user');
    this.editStudentForm = formBuilder.group({
      name: [this.user.name, Validators.compose([Validators.required])],
      department: [this.user.department, Validators.compose([Validators.required])],
      rollno: [this.user.rollno, Validators.compose([Validators.required])],
      cgpa: [this.user.cgpa, Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
  }

  save() {
    this.presentLoadingDefault();
    this.user.name = this.editStudentForm.value.name;
    this.user.department = this.editStudentForm.value.department;
    this.user.rollno = this.editStudentForm.value.rollno;
    this.user.cgpa = this.editStudentForm.value.cgpa;

    this.usersService.update(this.user).subscribe(response => {
      this.loading.dismiss();
        if(response.status === 200){
          this.presentToast("Student Details have been successfully updated.");
          this.navCtrl.pop();
        }
        else{
          this.presentToast("Something went wrong.");
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
      content: 'Please Wait...'
    });

    this.loading.present();
  }

}
