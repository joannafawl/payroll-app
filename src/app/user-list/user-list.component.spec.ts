import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {

  it('should render first user\'s name', async () => {
    await render(UserListComponent, {
      componentProperties: { users: [
        {id: 1, name: "Joanna", salary: 30000},
        {id: 2, name: "Duncan", salary: 300000}
    ] }
    })
    expect(screen.getByText('Joanna'));
  })

  it('should render second user\'s name', async () => {
    await render(UserListComponent, {
      componentProperties: { users: [
        {id: 1, name: "Joanna", salary: 30000},
        {id: 2, name: "Duncan", salary: 300000}
    ] }
    })
    expect(screen.getByText('Duncan'));
  })
});
