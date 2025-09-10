import { inject } from "@angular/core";
import { CanActivateFn, RedirectCommand, Router } from "@angular/router";

export const AuthGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();

    if(shouldGetAccess >= 0.5) {
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unhautorized'));
}