import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service'
import { of } from 'rxjs';

describe('UserListComponent', () => {

  it('should render first user\'s name', async () => {
    await render(UserListComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUsers() {
              return of([
                {id: 1, name: "Joanna", salary: 30000},
                {id: 2, name: "Duncan", salary: 300000}
              ])
            }
          }
        },
      ]
    })
    expect(screen.getByText('Joanna'));
  })

  it('should render second user\'s name', async () => {
    await render(UserListComponent, {
      componentProviders: [
        {
          provide: UserService,
          useValue: {
            getUsers() {
              return of([
                {id: 1, name: "Joanna", salary: 30000},
                {id: 2, name: "Duncan", salary: 300000}
              ])
            }
          }
        },
      ]
    })
    expect(screen.getByText('Duncan'));
  })
});
