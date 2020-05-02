import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageOnePageRoutingModule } from './page-one-routing.module';

import { PageOnePage } from './page-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageOnePageRoutingModule
  ],
  declarations: [PageOnePage]
})
export class PageOnePageModule {}
