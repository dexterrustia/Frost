import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-time-modal',
  templateUrl: './time-modal.page.html',
  styleUrls: ['./time-modal.page.scss'],
})
export class TimeModalPage implements OnInit {
  private isMultipleDays: Boolean
  private startDay: String = Date.now().toString()
  private endDay: String = Date.now().toString()
  private isvalid: boolean = true

  constructor(public modalCtrl: ModalController) {
    this.isMultipleDays = false
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit')
    this.modalCtrl.dismiss({
      'dismissed': true,
      startDay: this.startDay,
      isMultipleDays: this.isMultipleDays,
      endDay: this.endDay
    });
  }
  startDayOnChange = () => this.isvalid = false;

}
