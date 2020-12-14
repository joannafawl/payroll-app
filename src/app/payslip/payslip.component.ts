import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.scss']
})
export class PayslipComponent implements OnInit {

  user: User;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // get() {
    //   // const getOptions = {
    //   //   params: { id }
    //   // };
      this.user = this.http.get<User>('127.0.0.1:4201');
  }

}


