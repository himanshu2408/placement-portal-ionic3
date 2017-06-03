import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';
import { AlertController } from 'ionic-angular';
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
    private alertCtrl: AlertController,
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
      this.presentAlert('Nice Job!', 'New User has been added successfully.');
    });
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
