import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Detecta si el dispositivo es móvil
  isMobile(): boolean {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  // Función para autenticación biométrica
  async autenticar(): Promise<boolean> {
    if (!this.isMobile()) {
      // PC → acceso libre
      return true;
    }

    // Móvil → intentar huella / WebAuthn
    if (window.PublicKeyCredential) {
      try {
        const credential = await navigator.credentials.get({
          publicKey: {
            challenge: new Uint8Array([0x8C, 0xFA, 0x84, 0x02]), // valor dummy
            allowCredentials: [],
            userVerification: "required"
          }
        });
        console.log("Autenticación exitosa:", credential);
        return true;
      } catch (err) {
        console.error("Error autenticando:", err);
        return false;
      }
    } else {
      console.warn("No se soporta biometría en este dispositivo");
      return false;
    }
  }
}
