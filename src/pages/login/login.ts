import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService} from '../../app/services/auth.service';
import { Events } from 'ionic-angular';
import { ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SignupPage } from '../signup/signup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm : FormGroup;
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public events: Events,
    private storage: Storage,
    public formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
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
    let user = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
    this.authService.login(user).subscribe(response => {
        this.loading.dismiss();
        if(response.status === 200){
          this.storage.set('isAuthenticated', 'true');
          this.events.publish('user:login');
          this.presentToast("Holla Amigos!!! :D");
        }
        else if(response.status === 401){
          this.presentToast("Username and password do not match.");
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

  signup(){
    this.navCtrl.push(SignupPage);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
