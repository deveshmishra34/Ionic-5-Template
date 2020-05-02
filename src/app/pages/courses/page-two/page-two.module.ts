import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageTwoPageRoutingModule } from './page-two-routing.module';

import { PageTwoPage } from './page-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageTwoPageRoutingModule
  ],
  declarations: [PageTwoPage]
})
export class PageTwoPageModule {}
