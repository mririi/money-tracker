import {Directive} from "@angular/core";
import {Subject} from "rxjs";

@Directive()
export class AuthService {
  _accessToken: Subject<string> = new Subject<string>();
  accessToken = this._accessToken.asObservable();
  _refreshToken: Subject<string> = new Subject<string>();
  refreshToken = this._refreshToken.asObservable();

  setAccessToken(accessToken: string) {
    this._accessToken.next(accessToken);
  }

  setRefreshToken(refreshToken: string) {
    this._refreshToken.next(refreshToken);
  }
}
