import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {TransactionGetDto} from "src/app/core/dtos/transaction/TransactionGetDto";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {TransactionPostDto} from "src/app/core/dtos/transaction/TransactionPostDto";

@Injectable({
  providedIn: 'root'
})
export class TransactionApiService {
  url: string = 'http://localhost:8080/';
  constructor(public http: HttpClient) { }

  getTransactions(): Observable<TransactionGetDto[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*', // Replace with specific origin if needed
      'Content-Type': 'application/json'
    });

    return this.http.get<TransactionGetDto[]>(`${this.url}transactions`, { headers });
  }

  addTransaction(transaction: TransactionPostDto): Observable<TransactionGetDto> {
    return this.http.post<TransactionGetDto>(`${this.url}transactions`, transaction);
  }
}
