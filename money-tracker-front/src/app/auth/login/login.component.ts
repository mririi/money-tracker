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
  get disabled() {
    return !this.authPostDto.email || !this.authPostDto.password;
  }

  constructor(private readonly authApiService: AuthApiService,
              private readonly router: Router,
              private readonly route: ActivatedRoute,) {
  }

  login() {
    this.authApiService.authenticate(this.authPostDto).subscribe({
      next: (tokens: AuthGetDto) => {
        localStorage.setItem('access_token', tokens.access_token);
        this.router.navigate(['../home'], {relativeTo: this.route});
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
