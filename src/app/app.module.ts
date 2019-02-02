import { OrdersService } from './data/services/Orders.service';
import {  PapajhonsMenuComponent } from './papajhons-menu/papajhons-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { FormsModule  } from '@angular/forms';



import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModuleModule } from './sharedModule/sharedModule.module';
import { AnalyticsChartModule } from './papajhons-menu/papajhons-menu.module';





@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    SharedModuleModule,
    AnalyticsChartModule,
  ],

  schemas: [  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
