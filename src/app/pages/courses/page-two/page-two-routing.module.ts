import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageTwoPage } from './page-two.page';

const routes: Routes = [
  {
    path: '',
    component: PageTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageTwoPageRoutingModule {}
