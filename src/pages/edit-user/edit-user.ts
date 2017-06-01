import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {

  private user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usersService: UsersService,
    private alertCtrl: AlertController
  ) {
    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
  }

  save() {
    this.usersService.update(this.user)
      .subscribe(response => {
        this.presentAlert();
        this.navCtrl.pop();
      });
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nice Job!',
      subTitle: 'User Details have been updated successfully.',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
