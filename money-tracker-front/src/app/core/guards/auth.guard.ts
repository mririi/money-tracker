import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('access_token');
  // if (token && state.url === '/login') {
  //   router.navigate(['home']).then();  // Redirect to home (or another route)
  //   return false;
  // }
  if (!token) {
    router.navigate(['login']).then();
    return false;
  }
  return true;
};
