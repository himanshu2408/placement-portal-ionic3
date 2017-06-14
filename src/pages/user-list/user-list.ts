import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';
import { EditUserPage } from '../edit-user/edit-user';
import { ToastController, LoadingController } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';

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
    private toastCtrl: ToastController
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
        if(response.status === 200) {
          this.presentToast('Student record has been successfully deleted.');
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
}
