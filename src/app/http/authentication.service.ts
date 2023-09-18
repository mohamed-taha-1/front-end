import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = "http://localhost:8093";

  constructor(private http: HttpClient) { }

  LoginProceed(postData: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, postData);
  }

  fetchOrdersService() {
    return this.http.get(`${this.apiUrl}/order/all`);
  }
}
