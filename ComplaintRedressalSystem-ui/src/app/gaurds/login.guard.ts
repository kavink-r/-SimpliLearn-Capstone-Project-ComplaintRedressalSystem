import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
 const authservice = inject(AuthService);
 const router = inject(Router);
 if(authservice.currentUser.authentication){
  console.log("Login status checking.......true");
  return true;
 }else{
  console.log("Login status checking.......false");
  router.navigateByUrl("login");
  return false;
 }
};
