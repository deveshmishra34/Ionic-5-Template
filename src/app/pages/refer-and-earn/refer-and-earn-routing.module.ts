import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferAndEarnPage } from './refer-and-earn.page';

const routes: Routes = [
  {
    path: '',
    component: ReferAndEarnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferAndEarnPageRoutingModule {}
