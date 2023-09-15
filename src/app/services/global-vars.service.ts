import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalVarsService {
  private readonly STORAGE_TOKEN = 'token';
  private readonly STORAGE_USER = 'user';
  constructor() {}

  public setToken(token: string) {
    localStorage.setItem(this.STORAGE_TOKEN, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.STORAGE_TOKEN);
  }

  public clearToken() {
    localStorage.removeItem(this.STORAGE_TOKEN);
  }

  get isLoggedIn(): boolean {
    return this.getToken() != null && this.getUser() != null;
  }

  public setUser(user: any) {
    localStorage.setItem(this.STORAGE_USER, JSON.stringify(user));
  }

  public getUser(): any | null {
    const user = localStorage.getItem(this.STORAGE_USER);
    return user ? JSON.parse(user) : null;
  }

  public clearUser() {
    localStorage.removeItem(this.STORAGE_USER);
  }
}
