import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {TransactionGetDto} from "src/app/core/dtos/transaction/transactionGetDto";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {TransactionPostDto} from "src/app/core/dtos/transaction/transactionPostDto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransactionApiService {
  constructor(public http: HttpClient) { }

  getTransactions(profileId: number): Observable<TransactionGetDto[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*', // Replace with specific origin if needed
      'Content-Type': 'application/json'
    });

    return this.http.get<TransactionGetDto[]>(`${environment.apiUrl}transactions/profile/${profileId.toString()}`, { headers });
  }

  addTransaction(transaction: TransactionPostDto): Observable<TransactionGetDto> {
    return this.http.post<TransactionGetDto>(`${environment.apiUrl}transactions`, transaction);
  }
}
