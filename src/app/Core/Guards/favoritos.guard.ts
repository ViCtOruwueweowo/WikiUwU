import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritosGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const acceso = await this.authService.autenticar();
    if (!acceso) {
      // Si falla la biometría → redirige a home
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
