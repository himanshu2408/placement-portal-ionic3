import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { UserListPage } from '../pages/user-list/user-list';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { CompanyListPage } from '../pages/company-list/company-list';
import { EditCompanyPage } from '../pages/edit-company/edit-company';
import { AddUserPage } from '../pages/add-user/add-user';
import { UsersService } from './services/users.service';
import { CompaniesService } from './services/companies.service';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    UserListPage,
    CompanyListPage,
    EditUserPage,
    EditCompanyPage,
    AddUserPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    UserListPage,
    CompanyListPage,
    EditUserPage,
    EditCompanyPage,
    AddUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsersService,
    CompaniesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
