import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayslipComponent } from './payslip/payslip.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: ':id', component: PayslipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
