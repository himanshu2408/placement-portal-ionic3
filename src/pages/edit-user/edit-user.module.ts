import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditUserPage } from './edit-user';

@NgModule({
  declarations: [
    EditUserPage,
  ],
  imports: [
    IonicPageModule.forChild(EditUserPage),
  ],
  exports: [
    EditUserPage
  ]
})
export class EditUserPageModule {}
