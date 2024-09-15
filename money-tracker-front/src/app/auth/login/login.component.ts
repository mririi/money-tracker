import { Component } from '@angular/core';
import {AuthPostDto} from "../../core/dtos/auth/authPostDto";
import {AuthApiService} from "../../core/apis/auth.api.service";
import {AuthGetDto} from "../../core/dtos/auth/authGetDto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authPostDto: AuthPostDto = {
    email: '',
    password: ''
  };
  _disabled: boolean = false;
  isLoading: boolean = false;
  get disabled() {
    return this.authPostDto.email && this.authPostDto.password? this._disabled?? false: false;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  constructor(private readonly authApiService: AuthApiService,
              private readonly router: Router,
              private readonly route: ActivatedRoute,) {
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
}
