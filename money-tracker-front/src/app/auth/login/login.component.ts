import {Component, OnInit} from '@angular/core';
import {AuthPostDto} from "../../core/dtos/auth/authPostDto";
import {AuthApiService} from "../../core/apis/auth.api.service";
import {AuthGetDto} from "../../core/dtos/auth/authGetDto";
import {ActivatedRoute, Router} from "@angular/router";
import {ModeEnum} from "../../core/enums/mode.enum";
import {ModeToggleService} from 'src/app/core/services/mode-toggle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {
  authPostDto: AuthPostDto = {
    email: '',
    password: ''
  };
  _disabled: boolean = false;
  isLoading: boolean = false;
  imageUrl: string = 'assets/images/auth-light.png';
  imageMobileUrl: string = 'assets/images/auth-light-mobile.png';

  get disabled() {
    return !this.authPostDto.email || !this.authPostDto.password || this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  constructor(private readonly authApiService: AuthApiService,
              private readonly modeToggleService: ModeToggleService,
              private readonly router: Router,
              private readonly route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.modeToggleService.modeChanged$.subscribe((mode: ModeEnum) => {
      const isDark = mode === ModeEnum.DARK
      this.imageUrl = isDark ? 'assets/images/auth.png' : 'assets/images/auth-light.png';
      this.imageMobileUrl = isDark ? 'assets/images/auth-dark-mobile.png' : 'assets/images/auth-light-mobile.png';
    });
  }

  login() {
    this.disabled = true;
    this.isLoading = true;
    this.authApiService.authenticate(this.authPostDto).subscribe({
      next: (tokens: AuthGetDto) => {
        localStorage.setItem('access_token', tokens.access_token);
        this.router.navigate(['../home'], {relativeTo: this.route});
        this.disabled = false;
        this.isLoading = false;
      },
      error: () => {
        this.disabled = false;
        this.isLoading = false;
      }
    });
  }

  onGoToRegister() {
    this.router.navigate(['../register'], {relativeTo: this.route}).then();
  }
}
