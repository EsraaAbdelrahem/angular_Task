import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PapajhonsMenuComponent } from './papajhons-menu/papajhons-menu.component';




/*should be Home Module*/
const routes: Routes = [
{path: '', component: PapajhonsMenuComponent},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
