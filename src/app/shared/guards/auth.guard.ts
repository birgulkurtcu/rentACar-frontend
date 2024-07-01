import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // const authService = Inject(AuthService);

  if(!localStorage.getItem('token'))
    return false;

  const token = localStorage.getItem('token');

  const requiredRoles = route.data['requiredRoles'];

/*  if (!token.roles.some(role => requiredRoles.includes(role)))
    return false;*/

  return true;
};
