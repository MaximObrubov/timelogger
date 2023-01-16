import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';
import { PreloaderModule } from './preloader/preloader.module';
import { TimelogModule } from './timelog/timelog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PreloaderModule,
    BrowserModule,
    AppRoutingModule,
    FormModule,
    HttpClientModule,
    TimelogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
