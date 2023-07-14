import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const isAuthenticated =  (localStorage.getItem("token") != null && localStorage.getItem("token") != undefined) ? true : false;

  if (isAuthenticated) {
    return true; // Permite el acceso a la ruta
  } else {
    // Redirige a la ruta de inicio de sesión si el usuario no está autenticado;
    window.location.href = '/auth/login';
    return false; // No permite el acceso a la ruta
  }
};
