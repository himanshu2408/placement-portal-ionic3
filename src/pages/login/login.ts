import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService} from '../../app/services/auth.service';
import { Events } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user = {
    username: '',
    password: ''
  }
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public events: Events,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

  login(){
    this.presentLoadingDefault();
    this.authService.login(this.user).subscribe(response => {
        this.loading.dismiss();
        //console.log(response);
        if(response.status === 200){
          console.log(response.status);
          this.storage.set('isAuthenticated', 'true');
          this.events.publish('user:login');
        }
        else {
          console.log(response.status);
          console.log("errorrrr");
          this.presentAlert("Authentication failed.", "Please try again.");
        }
    });
  }

  signup(){
    this.navCtrl.push(SignupPage);
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
