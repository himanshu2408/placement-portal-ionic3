import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html',
  providers: []
})
export class MyApp {

  rootPage:any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public events: Events,
    private storage: Storage
  ) {

    this.storage.get('isAuthenticated').then((val) => {
      if(val === 'true'){
        this.rootPage = MainPage;
      }
      else{
        this.rootPage = LoginPage;
      }
    });


    this.events.subscribe('user:login', () => {
      this.loggedIn();
    });

    this.events.subscribe('user:logout', () => {
      this.loggedOut();
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


  }

  loggedIn(){
    this.rootPage = MainPage;
    console.log("successfully logged in");
  }

  loggedOut(){
    this.rootPage = LoginPage;
    console.log("successfully logged out");
  }
}

