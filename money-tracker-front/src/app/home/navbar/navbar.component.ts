import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {ProfileService} from "../../core/services/profile.service";
import {ProfileGetDto} from "../../core/dtos/profil/profileGetDto";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UpdateProfileModalComponent} from "../update-profile-modal/update-profile-modal.component";
import {ModeEnum} from "../../core/enums/mode.enum";
import { ModeToggleService } from 'src/app/core/services/mode-toggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  userName: string = '';
  profile: ProfileGetDto = {} as ProfileGetDto;
  imageUrl: string = 'assets/images/auth-light-mobile.png';

  constructor(private readonly router: Router,
              private readonly modalService: NgbModal,
              private readonly modeToggleService: ModeToggleService,
              private readonly profileService: ProfileService) {
  }

  ngOnInit() {
    this.loadProfile();
    this.modeToggleService.modeChanged$.subscribe((mode: ModeEnum) => {
      const isDark = mode === ModeEnum.DARK;
      this.imageUrl = isDark ? 'assets/images/auth-dark-mobile.png' : 'assets/images/auth-light-mobile.png';
    });
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

  onUpdateProfile() {
    const popup = this.modalService.open(UpdateProfileModalComponent)
    const modalRef = popup.componentInstance as UpdateProfileModalComponent;
    modalRef.profile = {...this.profile};
    popup.result.then(() => {
      this.profileService.reload();
    });
  }
}
