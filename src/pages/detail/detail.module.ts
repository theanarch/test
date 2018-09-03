import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DetailPage } from './detail';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
    ChartModule,
    FormsModule,
    BrowserModule,
  ],
})
export class DetailPageModule {
 

}
