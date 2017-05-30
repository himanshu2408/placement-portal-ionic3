import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';
import { EditUserPage } from '../edit-user/edit-user';


@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  users: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private usersService: UsersService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
    this.usersService.getUsers().then(response => this.users = response);
  }

  userSelected(user){
    this.navCtrl.push(EditUserPage, {
      user: user
    });
  }
}
