import { render, screen, fireEvent } from '@testing-library/angular'
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

import { PayslipComponent } from './payslip.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs'

describe('PayslipComponent', () => {
  
  it('should render annual gross pay for £40000', async () => {

    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 40000 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('grossPayYear');
    expect(text.textContent).toContain("£40000")
  })

  it('should render annual gross pay for £30000', async () => {
    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 30000 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('grossPayYear');
    expect(text.textContent).toContain("£30000");
  })

  it('should render employee\'s name', async () => {
    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 30000 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('employeeName');
    expect(text.textContent).toContain("Joanna");
  })

  it('should calculate and display monthly gross pay', async () => {
    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 30000 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('grossPayMonth');
    expect(text.textContent).toContain("£2500");
  })

  it('should calculate and display monthly gross pay', async () => {
    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 42000 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('grossPayMonth');
    expect(text.textContent).toContain("£3500");
  })

  it('should calculate and display monthly salary after tax for high salary', async () => {
    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 30000 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('afterTax');
    expect(text.textContent).toContain("£2083.33");
  })

  it('should calculate and display monthly salary after tax for low salary', async () => {
    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 8000 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('afterTax');
    expect(text.textContent).toContain("£666.67");
  })

  it('should calculate and display monthly salary after tax for medium salary', async () => {
    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 22500 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('afterTax');
    expect(text.textContent).toContain("£1666.67");
  })
  
  it('should calculate and display pension from monthly salary - £22500', async () => {
    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 22500 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('pension');
    expect(text.textContent).toContain("£100");
  })

  it('should calculate and display pension from large monthly salary - £200,000', async () => {
    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 200000 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('pension');
    expect(text.textContent).toContain("£635");
  })

  it('should calculate and display national insurance from large monthly salary - £22500', async () => {
    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 22500 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('nationalInsurance');
    expect(text.textContent).toContain("£135");
  })

  it('should display the tax period', async () => {
    await render(PayslipComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUser(id: 1) {
              return of({ id: 1, name: "Joanna", salary: 22500 });
            }
          }
        },
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return 1;
                }
              }
            }
          }
        }
      ] 
    })
    const text = screen.getByTestId('taxPeriod');
    expect(text.textContent).toContain("December 1st - December 31st");
  })
});
