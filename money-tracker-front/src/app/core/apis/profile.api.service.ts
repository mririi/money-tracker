import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProfileGetDto} from 'src/app/core/dtos/profil/profileGetDto';
import {environment} from "../../../environments/environment";
import {ProfileTokenPostDto} from "../dtos/profil/profileTokenPostDto";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {
  constructor(public http: HttpClient) { }

  getProfileByToken(profileTokenPostDto: ProfileTokenPostDto): Observable<ProfileGetDto> {
    return this.http.post<ProfileGetDto>(`${environment.apiUrl}profiles/profile`, profileTokenPostDto);
  }
}
