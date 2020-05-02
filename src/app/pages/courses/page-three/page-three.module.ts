import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageThreePageRoutingModule } from './page-three-routing.module';

import { PageThreePage } from './page-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageThreePageRoutingModule
  ],
  declarations: [PageThreePage]
})
export class PageThreePageModule {}
