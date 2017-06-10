import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  private newUser = {
    name : '',
    department: '',
    rollno: '',
    cgpa: ''
  };

  private loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usersService: UsersService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

  saveUser(){
    this.presentLoadingDefault();
    this.usersService.addUser(this.newUser).subscribe(response => {
      console.log(response);
      this.loading.dismiss();
      this.navCtrl.pop();
      this.navCtrl.pop();
      this.presentToast("New User has been successfully added.");
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
