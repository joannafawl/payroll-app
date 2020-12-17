import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.scss']
})
export class PayslipComponent implements OnInit {

  user: User

  constructor(private _userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.getId();
    this.user = this._userService.getUser(id);
  }

  getId() {
    return parseInt(this.route.snapshot.paramMap.get('id'));
  }

  calculateMonthlyGrossPay(): number {
    return Math.round(this.user.salary / 12 * 100) / 100;
  }

  calculateMonthlyPayAfterTax(): number {
    const taxFreePayDeducted = this.user.salary - 10000;
    let lowerRateTaxPay = 0;
    let upperRateTaxPay = 0;
    if (taxFreePayDeducted < 0) {
      return Math.round((this.user.salary / 12) * 100) / 100;
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
    let monthlyPayAfterTax = this.calculateMonthlyPayAfterTax();
    return Math.round(monthlyPayAfterTax * 0.06 * 100) / 100;
  }

  calculateNationalInsuranceContribution(): number {
    return Math.round(((this.user.salary - 9000) * 0.12) /12 * 100) / 100;

  }
}


