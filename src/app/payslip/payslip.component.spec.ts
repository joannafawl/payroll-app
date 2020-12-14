import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipComponent } from './payslip.component';

describe('PayslipComponent', () => {
  let component: PayslipComponent;
  let fixture: ComponentFixture<PayslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayslipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show gross pay', () => {
    const fixture = TestBed.createComponent(PayslipComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#grossPayYear').textContent).toContain('Total gross pay for current tax year: £30000');
  });

  it('should show gross pay for month', () => {
    const fixture = TestBed.createComponent(PayslipComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#grossPayMonth').textContent).toContain('Total gross pay for month: ');
  });
});
