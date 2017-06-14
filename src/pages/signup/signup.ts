import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../app/services/auth.service';
import { ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public signupForm : FormGroup;
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public formBuilder: FormBuilder
  ) {
    this.signupForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],
      password2: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    if(this.signupForm.value.password != this.signupForm.value.password2){
      this.presentToast("Passwords do not match!!!");
    }
    else{
      this.presentLoadingDefault();
      let newUser = {
        username: this.signupForm.value.username,
        password: this.signupForm.value.password,
        password2: this.signupForm.value.password2
      };
      this.authService.signup(newUser).subscribe(response => {
        this.loading.dismiss();
        if(response.status === 200) {
          this.navCtrl.pop();
          this.presentToast("Registration Successful.");
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
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Signing Up...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
