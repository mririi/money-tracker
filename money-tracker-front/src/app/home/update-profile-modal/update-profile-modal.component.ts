import {Component, OnInit} from '@angular/core';
import {ProfileGetDto} from "../../core/dtos/profil/profileGetDto";
import {AbstractCustomModalDirective} from "../../shared/custom-modal/abstract-custom-modal.directive";
import {ProfileApiService} from "../../core/apis/profile.api.service";
import {ProfilePatchDto} from "../../core/dtos/profil/profilePatchDto";

@Component({
  selector: 'app-update-profile-modal',
  templateUrl: './update-profile-modal.component.html',
  styleUrls: ['./update-profile-modal.component.scss']
})
export class UpdateProfileModalComponent extends AbstractCustomModalDirective implements OnInit {
  profile: ProfileGetDto = {} as ProfileGetDto;
  userDto: ProfilePatchDto = {} as ProfilePatchDto;
  constructor(private readonly profileApiService: ProfileApiService) {
    super();
  }

  ngOnInit(): void {
    this.userDto = {
      firstname: this.profile.firstName,
      lastname: this.profile.lastName,
    };
  }

  onSubmit(): void {
    this.profileApiService.updateProfile(this.userDto, this.profile.id).subscribe({
      next: () => {
        this.onResult();
      }
    });
  }
}
