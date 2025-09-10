import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(
      routes, 
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always'
      }),
      withPreloading(PreloadAllModules)
    )]
  // withComponentInputBinding() permet de pouvoir utiliser et utiliser un paramètre dynamique dans la route pour faire une requete
  // si :productId est utilisé dans la route, il faut utiliser productId également dans le composant

  // withRouterConfig({paramsInheritanceStrategy: 'always'}) va permettre de transmettre la valeur d'un paramètre dynamique dans la route à un enfant qui est relié
};
