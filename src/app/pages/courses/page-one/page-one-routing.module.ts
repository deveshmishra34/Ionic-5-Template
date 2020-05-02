import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageOnePage } from './page-one.page';

const routes: Routes = [
  {
    path: '',
    component: PageOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageOnePageRoutingModule {}
