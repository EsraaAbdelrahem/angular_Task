import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleComponent } from './sharedModule.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedModuleComponent,
    SideBarComponent
],
exports: [
  SideBarComponent
]
})
export class SharedModuleModule { }
