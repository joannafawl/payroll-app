import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers().subscribe(data => this.users = data);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:4200");
  }

}
