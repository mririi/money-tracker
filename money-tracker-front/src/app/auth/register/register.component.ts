import {Component} from '@angular/core';
import {AuthApiService} from "../../core/apis/auth.api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthGetDto} from "../../core/dtos/auth/authGetDto";
import {RegisterPostDto} from "../../core/dtos/auth/registerPostDto";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  authPostDto: RegisterPostDto = {
    email: '',
    password: ''
  };
  _disabled: boolean = false;
  isLoading: boolean = false;
  passwordConfirmation: string = '';
  get disabled() {
    const s = (!this.authPostDto.email || !this.authPostDto.password || !this.passwordConfirmation ||
      this.authPostDto.password !== this.passwordConfirmation || this._disabled);
    return s;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  constructor(private readonly authApiService: AuthApiService,
              private readonly router: Router,
              private readonly route: ActivatedRoute,) {
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
