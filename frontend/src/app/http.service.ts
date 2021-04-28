import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private API_URL = 'http://localhost:3000/login';

  constructor(@Inject(HttpClient) private httpClient: HttpClient) {}

  login(body: any, token: string): Observable<any> {
    return this.httpClient.post(this.API_URL, body, {
      headers: { Authorization: token },
    });
  }
}
