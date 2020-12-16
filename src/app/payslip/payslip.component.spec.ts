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

  it('should calculate and display monthly salary after tax for high salary', async () => {
    await render(PayslipComponent, {
      componentProperties: { user: { id: 1, name: "Joanna", salary: 30000 } }
    })
    const text = screen.getByTestId('afterTax');
    expect(text.textContent).toContain("£2083.33");
  })

  it('should calculate and display monthly salary after tax for low salary', async () => {
    await render(PayslipComponent, {
      componentProperties: { user: { id: 1, name: "Joanna", salary: 8000 } }
    })
    const text = screen.getByTestId('afterTax');
    expect(text.textContent).toContain("£666.67");
  })

  it('should calculate and display monthly salary after tax for medium salary', async () => {
    await render(PayslipComponent, {
      componentProperties: { user: { id: 1, name: "Joanna", salary: 22500 } }
    })
    const text = screen.getByTestId('afterTax');
    expect(text.textContent).toContain("£1666.67");
  })
  
  it('should calculate and display pension from monthly salary - £22500', async () => {
    await render(PayslipComponent, {
      componentProperties: { user: { id: 1, name: "Joanna", salary: 22500 } }
    })
    const text = screen.getByTestId('pension');
    expect(text.textContent).toContain("£100");
  })

  it('should calculate and display pension from large monthly salary - £200,000', async () => {
    await render(PayslipComponent, {
      componentProperties: { user: { id: 2, name: "Duncan", salary: 200000 } }
    })
    const text = screen.getByTestId('pension');
    expect(text.textContent).toContain("£635");
  })

  it('should calculate and display national insurance from large monthly salary - £22500', async () => {
    await render(PayslipComponent, {
      componentProperties: { user: { id: 2, name: "Duncan", salary: 22500 } }
    })
    const text = screen.getByTestId('nationalInsurance');
    expect(text.textContent).toContain("£135");
  })
});
