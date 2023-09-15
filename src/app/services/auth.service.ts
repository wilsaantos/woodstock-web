import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse, User } from '../shared/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public register(user: User): Observable<any> {
    return this.httpClient.post(`${environment.hostUrl}/auth/register`, user);
  }

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${environment.hostUrl}/auth/authenticate`,
      loginRequest
    );
  }
}
