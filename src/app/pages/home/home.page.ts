import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular'

import { ModalController } from '@ionic/angular';
import { TimeModalPage } from '../time-modal/time-modal.page';
import { AppServService } from 'src/app/services/app-serv.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage'


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  _sensorSystem: Observable<Object[]>;
  _message: String = '';
  constructor(
    private serv: AppServService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private storage: Storage) {
    this.getData();
  }

  ngOnInit() {
  }

  getData = async () => {
    const loading = await this.loadingCtrl.create({
      message: "Getting stations",
      spinner: 'bubbles'
    })
    loading.present()
    let senseSystem = this.serv.getSensenSystem().toPromise().then(res => {
      this._sensorSystem = res.data
      console.table(this._sensorSystem)
      loading.dismiss()
    }).catch(err => {
      loading.dismiss()
      console.log(err)
      if (err.message)
        this._message = err.message
      if (err.error.error.reason)
        this._message = err.error.error.reason

    });
  }
  openTimeModal = async (id: String) => {
    const modal = await this.modalCtrl.create({
      component: TimeModalPage
    });
    modal.present();
    const data = {
      ...await modal.onWillDismiss(),
      id: id
    }

    console.log(data);
    this.openDetails(data)
  }

  async openDetails(parameter: any, ) {

    await this.storage.set('myParam', parameter);
    await this.navCtrl.navigateForward(['observation'])
    // await this.storage.set('myParam', parameter);
    // await this.navCtrl.navigateForward(['/currency-details/tabs-currency/currency-overview']);
  }

}
