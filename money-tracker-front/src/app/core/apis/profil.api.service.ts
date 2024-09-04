import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProfilGetDto} from 'src/app/core/dtos/profil/ProfilGetDto';

@Injectable({
  providedIn: 'root'
})
export class ProfilApiService {
  url: string = 'http://money-tracker-backend:8080/';
  constructor(public http: HttpClient) { }
  getProfil(id: number = 1): Observable<ProfilGetDto> {
    return this.http.get<any>(`${this.url}profils/${id}`);
  }
}
