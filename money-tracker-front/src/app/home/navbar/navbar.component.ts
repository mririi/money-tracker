import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {ProfileApiService} from "../../core/apis/profile.api.service";
import {ProfileService} from "../../core/services/profile.service";
import {ProfileGetDto} from "../../core/dtos/profil/profileGetDto";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProfilePatchDto} from "../../core/dtos/profil/profilePatchDto";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  userName: string = '';
  profile: ProfileGetDto = {} as ProfileGetDto;
  userDto: ProfilePatchDto = {} as ProfilePatchDto;

  constructor(private readonly router: Router,
              private readonly modalService: NgbModal,
              private readonly profileApiService: ProfileApiService,
              private readonly profileService: ProfileService) {
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.profile.subscribe({
      next: (profile: ProfileGetDto) => {
        this.profile = profile;
        if (!!profile.firstName && !!profile.lastName) {
          this.userName = profile.firstName + ' ' + profile.lastName;
        }
      }
    });
  }

  onLogout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']).then();
  }

  onUpdateProfile(content: any) {
    this.modalService.open(content)
    this.userDto = {
      firstname: this.profile.firstName,
      lastname: this.profile.lastName
    };
  }

  onUpdate() {
    this.profileApiService.updateProfile(this.userDto, this.profile.id).subscribe({
      next: () => {
        this.reloadProfile();
        this.onCloseModal();
      }
    });
  }

  onCloseModal() {
    this.modalService.dismissAll();
  }

  private reloadProfile() {
    this.profileApiService.getProfileByToken({token: localStorage.getItem('access_token') || ''}).subscribe({
      next: (profile: ProfileGetDto) => {
        this.profileService.setProfile(profile);
      }
    });
  }
}
