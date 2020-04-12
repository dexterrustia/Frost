import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';
import { AppServService } from 'src/app/services/app-serv.service'; 
import { TimeModalPage } from '../time-modal/time-modal.page'
import { TimeModalPageModule  } from '../time-modal/time-modal.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule, 
    HttpClientModule,
    TimeModalPageModule
  ],
  declarations: [
    HomePage, 
  ],
  entryComponents: [TimeModalPage],
  providers: [AppServService]

})
export class HomePageModule {}
