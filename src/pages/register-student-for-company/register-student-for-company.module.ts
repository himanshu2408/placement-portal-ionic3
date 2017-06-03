import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterStudentForCompanyPage } from './register-student-for-company';

@NgModule({
  declarations: [
    RegisterStudentForCompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterStudentForCompanyPage),
  ],
  exports: [
    RegisterStudentForCompanyPage
  ]
})
export class RegisterStudentForCompanyPageModule {}
