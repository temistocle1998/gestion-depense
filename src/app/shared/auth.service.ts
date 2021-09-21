import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depense } from '../depense/depense';

// User interfacedepense
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

   // User registration
   register(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }

  // Access current depense
  currentDepense(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/currentRevenu');
  }

  // add new depense
  addDepense(depense: Depense): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/depense', depense);
  }

  // Access current depense
  getAllDepenseByUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/depense');
  }

    // Access current depense
    getAllCategorie(): Observable<any> {
      return this.http.get('http://127.0.0.1:8000/api/categorie');
    }

    getTotalDepense(): Observable<any> {
      return this.http.get('http://127.0.0.1:8000/api/auth/depense-actuel');
    }
}
