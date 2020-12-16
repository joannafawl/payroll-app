import { Component, Input, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @Input() id: number;

  title = 'Payroll App';
  // currentUser: User;

  constructor() {}

  ngOnInit(): void {
    
  }
}
