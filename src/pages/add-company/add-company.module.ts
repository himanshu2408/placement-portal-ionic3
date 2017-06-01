import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCompanyPage } from './add-company';

@NgModule({
  declarations: [
    AddCompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCompanyPage),
  ],
  exports: [
    AddCompanyPage
  ]
})
export class AddCompanyPageModule {}
