import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ProfileGetDto} from 'src/app/core/dtos/profil/profileGetDto';
import {environment} from "../../../environments/environment";
import {ProfileTokenPostDto} from "../dtos/profil/profileTokenPostDto";
import {ProfilePatchDto} from "../dtos/profil/profilePatchDto";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {
  constructor(public http: HttpClient) { }

  getProfileByToken(profileTokenPostDto: ProfileTokenPostDto): Observable<ProfileGetDto> {
    return this.http.post<ProfileGetDto>(`${environment.apiUrl}profiles/profile`, profileTokenPostDto);
  }

  updateBalance(profileId: number, balance: number): Observable<void> {
    const httpParams = new HttpParams().set('balance', balance as any);
    return this.http.put<void>(`${environment.apiUrl}profiles/${profileId}/balance`, null, { params: httpParams });
  }

  updateProfile(patch: ProfilePatchDto, profileId: number): Observable<void> {
    return this.http.patch<void>(`${environment.apiUrl}profiles/${profileId.toString()}`, patch);
  }
}
