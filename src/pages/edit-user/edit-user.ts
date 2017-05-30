import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';

@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private usersService: UsersService) {
    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
  }

  save() {
    this.usersService.update(this.user)
      .subscribe(response => {
        this.navCtrl.pop();
      });
  }
}
