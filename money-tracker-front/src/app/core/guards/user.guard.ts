import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const userGuard: CanActivateFn = (_, state) => {
  const router = inject(Router);
  if (state.url === '/login' && !!localStorage.getItem('access_token')) {
    router.navigate(['home']).then();
    return false;
  }
  return true;
};
