import {Directive} from "@angular/core";
import {Subject} from "rxjs";
import {ProfileGetDto} from "../dtos/profil/profileGetDto";

@Directive()
export class ProfileService {
  _profile: Subject<ProfileGetDto> = new Subject<ProfileGetDto>();
  profile = this._profile.asObservable();

  setProfile(profile: ProfileGetDto) {
    this._profile.next(profile);
  }
}
