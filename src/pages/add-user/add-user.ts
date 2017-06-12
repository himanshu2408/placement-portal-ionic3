import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  public addUserForm : FormGroup;
  private loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usersService: UsersService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public formBuilder: FormBuilder
  ) {
    this.addUserForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      department: ['', Validators.compose([Validators.required])],
      rollno: ['', Validators.compose([Validators.required])],
      cgpa: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

  saveUser(){
    this.presentLoadingDefault();
    let newUser = {
        name : this.addUserForm.value.name,
        department: this.addUserForm.value.department,
        rollno: this.addUserForm.value.rollno,
        cgpa: this.addUserForm.value.cgpa
      };
    this.usersService.addUser(newUser).subscribe(response => {
      this.loading.dismiss();
      if(response.status === 200){
        this.navCtrl.pop();
        this.navCtrl.pop();
        this.presentToast("New User has been successfully added.");
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
      content: 'Please wait...'
    });

    this.loading.present();
  }
}
