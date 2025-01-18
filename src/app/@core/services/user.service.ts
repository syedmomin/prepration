import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private employeeUrl = 'dummy.json';
  private userUrl = 'user.json';
  private currentUserSubject: Subject<User> = new Subject<User>();
  public currentUser: Observable<User> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  login(login: Login): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.getUsers().subscribe(users => {
        const user = users.find(u => u.email === login.email && u.password === login.password);
        if (user) {
          this.currentUserSubject.next(user);
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      });
    });
  }
}

export interface Employee {
  name: string;
  age: number;
  designation: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
}