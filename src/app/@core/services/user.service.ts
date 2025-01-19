import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private employeeUrl = 'dummy.json';
  private userUrl = 'user.json';
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  login(login: Login): Observable<boolean> {
    return this.getUsers().pipe(
      map(users => {
        const user = users.find(u => u.email === login.email && u.password === login.password);
        if (user) {
          this.currentUserSubject.next(user);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
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