import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular'

import { PayslipComponent } from './payslip.component';

describe('PayslipComponent', () => {
  
  it('should render annual gross pay', async () => {
    await render(PayslipComponent, {
      componentProperties: { user: { id: 1, name: "Joanna", salary: 40000 } }
    })
    const text = screen.getByTestId('grossPayYear');
    expect(text.textContent).toContain("£40000")
  })

  it('should render annual gross pay', async () => {
    await render(PayslipComponent, {
      componentProperties: { user: { id: 1, name: "Joanna", salary: 30000 } }
    })
    const text = screen.getByTestId('grossPayYear');
    expect(text.textContent).toContain("£30000");
  })

  it('should render employee\'s name', async () => {
    await render(PayslipComponent, {
      componentProperties: { user: { id: 1, name: "Joanna", salary: 30000 } }
    })
    const text = screen.getByTestId('employeeName');
    expect(text.textContent).toContain("Joanna");
  })

  it('should calculate and display monthly gross pay', async () => {
    await render(PayslipComponent, {
      componentProperties: { user: { id: 1, name: "Joanna", salary: 30000 } }
    })
    const text = screen.getByTestId('grossPayMonth');
    expect(text.textContent).toContain("£2500");
  })

  it('should calculate and display monthly gross pay', async () => {
    await render(PayslipComponent, {
      componentProperties: { user: { id: 1, name: "Joanna", salary: 42000 } }
    })
    const text = screen.getByTestId('grossPayMonth');
    expect(text.textContent).toContain("£3500");
  })
});
