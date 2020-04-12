import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeModalPage } from './time-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TimeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeModalPageRoutingModule {}
