import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // const usersObservable: Observable<User[]> = this.http.get<User[]>("http://localhost:4200");
    // let users: User[];
    // usersObservable.subscribe(data => users = data);
    // return users;
    return this.http.get<User[]>("http://localhost:4200/api/users");
  }

  getUser(id: number): Observable<User> {
    // const userObservable: Observable<User> = this.http.get<User>(`http://localhost:4200/${id}`);
    // let user: User;
    // userObservable.subscribe(data => user = data);
    // return user;
    return this.http.get<User>(`http://localhost:4200/api/users/${id}`);
  }
}
