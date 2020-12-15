import { Component, Input, OnInit } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.scss']
})
export class PayslipComponent implements OnInit {

  @Input() user: User
  monthlyPayAfterTax: number;

  constructor() { }

  ngOnInit(): void {
    this.monthlyPayAfterTax = this.calculateMonthlyPayAfterTax();
  }

  calculateMonthlyGrossPay(): number {
    return this.user.salary / 12;
  }

  calculateMonthlyPayAfterTax(): number {
    const taxFreePayDeducted = this.user.salary - 10000;
    let lowerRateTaxPay = 0;
    let upperRateTaxPay = 0;
    if (taxFreePayDeducted < 0) {
      return (Math.round((this.user.salary / 12) * 100) / 100);
    }
    else if (taxFreePayDeducted < 15000) {
      lowerRateTaxPay = taxFreePayDeducted * 0.2;
    }
    else {
      lowerRateTaxPay = 15000 * 0.2;
      upperRateTaxPay = (taxFreePayDeducted - 15000) * 0.4;
    }
    return (Math.round(((this.user.salary - lowerRateTaxPay - upperRateTaxPay) / 12) * 100) / 100);
  }

  calculatePensionContribution(): number {
    return Math.round(this.monthlyPayAfterTax * 0.06 * 100) / 100;
  }

  calculateNationalInsuranceContribution(): number {
    return Math.round(((this.user.salary - 9000) * 0.12) /12 * 100) / 100;

  }
}


