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
    return this.http.get<User[]>("http://localhost:4200");
  }

  getUser(id: number): User {
    
    const userObservable: Observable<User> = this.http.get<User>(`http://localhost:4200/${id}`);
    let user;
    userObservable.subscribe(data => user = data);
    return user;
  }
}
