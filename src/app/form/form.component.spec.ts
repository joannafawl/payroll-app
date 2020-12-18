import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { FormComponent } from './form.component';

describe('FormComponent', () => {

  it('should render name input box and accept text input', async () => {
    await render(FormComponent);
    const nameControl = <HTMLInputElement>screen.getByLabelText("name");

    userEvent.type(nameControl, 'Tim');
    expect(nameControl.value).toEqual('Tim');

  })
});

