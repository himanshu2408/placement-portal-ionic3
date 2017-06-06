import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { UserListPage } from '../pages/user-list/user-list';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { AddUserPage } from '../pages/add-user/add-user';

import { CompanyListPage } from '../pages/company-list/company-list';
import { EditCompanyPage } from '../pages/edit-company/edit-company';
import { AddCompanyPage } from '../pages/add-company/add-company';
import { RegisteredStudentsPage } from '../pages/registered-students/registered-students';
import { RegisterStudentForCompanyPage } from '../pages/register-student-for-company/register-student-for-company';

import { UsersService } from './services/users.service';
import { StaticService } from './services/static.service';
import { CompaniesService } from './services/companies.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    SignupPage,
    UserListPage,
    EditUserPage,
    AddUserPage,
    CompanyListPage,
    EditCompanyPage,
    AddCompanyPage,
    RegisteredStudentsPage,
    RegisterStudentForCompanyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    LoginPage,
    SignupPage,
    UserListPage,
    CompanyListPage,
    EditUserPage,
    EditCompanyPage,
    AddUserPage,
    AddCompanyPage,
    RegisteredStudentsPage,
    RegisterStudentForCompanyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsersService,
    CompaniesService,
    StaticService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
