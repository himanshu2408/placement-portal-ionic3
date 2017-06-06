import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserListPage } from '../user-list/user-list';
import { CompanyListPage } from '../company-list/company-list';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthService } from '../../app/services/auth.service';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage,
    public events: Events
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  manageStudents(){
    this.navCtrl.push(UserListPage);
  }

  manageCompanies(){
    this.navCtrl.push(CompanyListPage);
  }

  logout(){
    this.presentLoading('Logging Out...');
    this.authService.logout().subscribe(response => {
      this.loading.dismiss();
      if(response.status === 200) {
        this.storage.set('isAuthenticated', 'false');
        this.presentAlert("Adios!!!", "Successfully Logged out");
        this.events.publish('user:logout');
      }
      else{
        this.presentAlert("Sorry!!!", "Something went wrong, please try again...");
      }
    });
  }

  presentLoading(content) {
    this.loading = this.loadingCtrl.create({
      content: content
    });

    this.loading.present();
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
