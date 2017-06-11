import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompaniesService } from '../../app/services/companies.service';
import { AlertController } from 'ionic-angular';
import { RegisteredStudentsPage } from '../registered-students/registered-students';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-edit-company',
  templateUrl: 'edit-company.html',
})
export class EditCompanyPage {

  private company: any;
  public editCompanyForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private companiesService: CompaniesService,
    private alertCtrl: AlertController,
    public formBuilder: FormBuilder
  ) {
    this.company = navParams.get('company');
    this.editCompanyForm = formBuilder.group({
      name: [this.company.name, Validators.compose([Validators.required])],
      profile: [this.company.profile, Validators.compose([Validators.required])],
      ctc: [this.company.ctc, Validators.compose([Validators.required])],
      address: [this.company.address, Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCompanyPage');
  }

  save() {
    this.company.name = this.editCompanyForm.value.name;
    this.company.profie = this.editCompanyForm.value.profile;
    this.company.ctc = this.editCompanyForm.value.ctc;
    this.company.address = this.editCompanyForm.value.address;

    this.companiesService.update(this.company)
      .subscribe(response => {
        this.presentAlert();
        this.navCtrl.pop();
      });
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nice Job!',
      subTitle: 'Company Details have been updated successfully.',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  showRegisteredStudents(company){
    console.log(company);
    this.navCtrl.push(RegisteredStudentsPage, {
      company: company
    });
  }
}
