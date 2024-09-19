import {Directive} from "@angular/core";
import {Subject} from "rxjs";
import {ProfileGetDto} from "../dtos/profil/profileGetDto";

@Directive()
export class ProfileService {
  _profile: Subject<ProfileGetDto> = new Subject<ProfileGetDto>();
  profile = this._profile.asObservable();
  _reload: Subject<void> = new Subject<void>();
  reloaded = this._reload.asObservable();

  setProfile(profile: ProfileGetDto) {
    this._profile.next(profile);
  }

  reload() {
    this._reload.next();
  }
}
