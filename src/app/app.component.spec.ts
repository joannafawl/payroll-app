import { ConstantPool } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PayslipComponent } from './payslip/payslip.component';
import { render, screen, fireEvent } from '@testing-library/angular'
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        PayslipComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Payroll App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Payroll App');
  });

  // it('should retrieve user based on id and render payslip', async () => {
  //   await render(AppComponent, {
  //     componentProperties: { id: 2 }
  //   })
  //   expect(screen.getByText("Duncan"));
  // })
});
