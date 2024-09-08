import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {AuthPostDto} from "../dtos/auth/authPostDto";
import {AuthGetDto} from "../dtos/auth/authGetDto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RegisterPostDto} from "../dtos/auth/registerPostDto";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(public http: HttpClient) {
  }
  authenticate(body: AuthPostDto): Observable<AuthGetDto> {
    return this.http.post<AuthGetDto>(`${environment.apiUrl}auth/authenticate`, body);
  }

  register(body: RegisterPostDto): Observable<AuthGetDto> {
    body.role = 'GUEST';
    return this.http.post<AuthGetDto>(`${environment.apiUrl}auth/register`, body);
  }
}
