import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
// import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as fromRoot from '../app.reducer';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private store: Store<fromRoot.State>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));
    // if (this.authService.isAuth()) {
    //   return true;
    // } else {
    //   this.router.navigate(['/loging']);
    //   return false;
    // }
  }
  canLoad(route: Route) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));
    //   if (this.authService.isAuth()) {
    //     return true;
    //   } else {
    //     this.router.navigate(['/loging']);
    //     return false;
    //   }
  }
}
