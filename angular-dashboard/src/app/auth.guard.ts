import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const currentmenu = route.url[0].path;
  const router = inject(Router);
  const service = inject(LoginService);
  if(service.isLoggedIn){
    return true;
  }else {
    router.navigate(['login']);
    return false;
  }
};
