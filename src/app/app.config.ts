import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding())]
  // withComponentInputBinding() permet de pouvoir utiliser et utiliser un paramètre dynamique dans la route pour faire une requete
  // si :productId est utilisé dans la route, il faut utiliser productId également dans le composant
};
