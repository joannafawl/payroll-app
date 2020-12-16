import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayslipComponent } from './payslip/payslip.component';

const routes: Routes = [
  { path: ':id', component: PayslipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
