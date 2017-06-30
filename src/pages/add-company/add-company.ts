import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompaniesService } from '../../app/services/companies.service';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-company',
  templateUrl: 'add-company.html',
})
export class AddCompanyPage {

  public addCompanyForm : FormGroup;
  private loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private companiesService: CompaniesService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public formBuilder: FormBuilder
  ) {
    this.addCompanyForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      profile: ['', Validators.compose([Validators.required])],
      ctc: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCompanyPage');
  }

  saveCompany(){
    this.presentLoadingDefault();
    let newCompany = {
        name : this.addCompanyForm.value.name,
        profile: this.addCompanyForm.value.profile,
        ctc: this.addCompanyForm.value.ctc,
        address: this.addCompanyForm.value.address
      };
    this.companiesService.addCompany(newCompany).subscribe(response => {
      this.loading.dismiss();
        if(response.status === 200){
          if(response._body == "Company with this name is already registered."){
            this.presentToast("Company with this name is already registered.");
          }
          else{
            this.navCtrl.pop();
            this.presentToast("New Company has been successfully added.");
          }
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

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }
}
