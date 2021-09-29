import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../categorie/categorie';
import { Depense } from '../depense/depense';
import { Revenu } from '../revenu/revenu';

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

    AddCategorie(categorie: Categorie): Observable<any> {
      return this.http.post('http://127.0.0.1:8000/api/categorie', categorie);
    }

    getTotalDepense(): Observable<any> {
      return this.http.get('http://127.0.0.1:8000/api/auth/depense-actuel');
    }

    getNombreCategorie(): Observable<any> {
      return this.http.get('http://127.0.0.1:8000/api/getNombreCategorie');
    }

    AllRevenuByUser(): Observable<any> {
      return this.http.get('http://127.0.0.1:8000/api/auth/AllRevenuByUser');
    }

    AllRevenuByMonth(): Observable<any> {
      return this.http.get('http://127.0.0.1:8000/api/auth/revenuMois');
    }

    AddRevenu(revenu: Revenu): Observable<any> {
      return this.http.post('http://127.0.0.1:8000/api/auth/revenu', revenu);
    }

    getTypeRevenu(): Observable<any> {
      return this.http.get('http://127.0.0.1:8000/api/getTypeRevenu');
    }

}
