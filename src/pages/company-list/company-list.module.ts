import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyListPage } from './company-list';

@NgModule({
  declarations: [
    CompanyListPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyListPage),
  ],
  exports: [
    CompanyListPage
  ]
})
export class CompanyListPageModule {}
