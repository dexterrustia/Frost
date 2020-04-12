import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeModalPageRoutingModule } from './time-modal-routing.module';

import { TimeModalPage } from './time-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeModalPageRoutingModule
  ],
  declarations: [TimeModalPage],
  exports : [TimeModalPage]
})
export class TimeModalPageModule {}
