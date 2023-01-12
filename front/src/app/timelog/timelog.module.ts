import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelogPageComponent } from './timelog-page/timelog-page.component';



@NgModule({
  declarations: [
    TimelogPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimelogPageComponent
  ]
})
export class TimelogModule { }
