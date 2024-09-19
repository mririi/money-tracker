import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "../../core/apis/auth.api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthGetDto} from "../../core/dtos/auth/authGetDto";
import {RegisterPostDto} from "../../core/dtos/auth/registerPostDto";
import {ModeEnum} from "../../core/enums/mode.enum";
import {ModeToggleService} from "../../core/services/mode-toggle.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss','./register.component.scss']
})
export class RegisterComponent implements OnInit {
  authPostDto: RegisterPostDto = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  _disabled: boolean = false;
  isLoading: boolean = false;
  passwordConfirmation: string = '';
  imageUrl: string = 'assets/images/auth-light.png';
  imageMobileUrl: string = 'assets/images/auth-light-mobile.png';
  get disabled() {
    return (!this.authPostDto.email || !this.authPostDto.password || !this.passwordConfirmation ||
      this.authPostDto.password !== this.passwordConfirmation || this._disabled);
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
      const isDark = mode === ModeEnum.DARK;
      this.imageUrl = isDark ? 'assets/images/auth.png' : 'assets/images/auth-light.png';
      this.imageMobileUrl = isDark ? 'assets/images/auth-dark-mobile.png' : 'assets/images/auth-light-mobile.png';
    });
  }

  register() {
    this.disabled = true;
    this.isLoading = true;
    this.authApiService.register(this.authPostDto).subscribe({
      next: (tokens: AuthGetDto) => {
        localStorage.setItem('access_token', tokens.access_token);
        this.router.navigate(['../home'], {relativeTo: this.route}).then();
        this.disabled = false;
        this.isLoading = false;
      },
      error: () => {
        this.disabled = false;
        this.isLoading = false;
      }
    });
  }

  onGoToLogin() {
    this.router.navigate(['../login'], {relativeTo: this.route}).then();
  }
}
