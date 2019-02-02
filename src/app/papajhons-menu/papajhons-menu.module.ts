import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {  PapajhonsMenuComponent } from './papajhons-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [ PapajhonsMenuComponent,
    PapajhonsMenuComponent
]  ,
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    PapajhonsMenuComponent
  ]
})
export class AnalyticsChartModule {

    }
