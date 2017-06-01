import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';
import { EditUserPage } from '../edit-user/edit-user';
import { LoadingController } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  private users: any;
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usersService: UsersService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.presentLoadingDefault();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
    this.usersService.getUsers().subscribe(response => this.users = response);
    this.loading.dismiss();
  }

  editUser(user){
    this.navCtrl.push(EditUserPage, {
      user: user
    });
  }

  addUser(){
    this.navCtrl.push(AddUserPage);
  }

  deleteUser(user){
    this.presentLoadingDefault();
    this.usersService.deleteUser(user).subscribe(response => {
      console.log(response);
      this.loading.dismiss();
      this.presentAlert('Nice Job!', 'User has been successfully deleted.');
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
}
