import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';
import { UIService } from '../shared/ui.service';
import { TrainingService } from '../training/training.service';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingService: TrainingService,
    private uiService: UIService,
    private store: Store<{ ui: fromApp.State }>
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['./training']);
      } else {
        this.trainingService.cancelSubscriptions();
        this.isAuthenticated = false;
        this.authChange.next(false);
        this.router.navigate(['./loging']);
      }
    });
  }

  registerUser(authData: AuthData) {
    // this.uiService.loadingStateChanged.next(true);
    this.store.dispatch({ type: 'START_LOADING' });
    this.afAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        // this.uiService.loadingStateChanged.next(false);
        this.store.dispatch({ type: 'STOP_LOADING' });
      })
      .catch((error) => {
        // this.uiService.loadingStateChanged.next(false);
        this.store.dispatch({ type: 'STOP_LOADING' });
        this.uiService.showSnackbar(error.message, null, { duration: 3000 });
      });
  }

  login(authData: AuthData) {
    // this.uiService.loadingStateChanged.next(true);
    this.store.dispatch({ type: 'START_LOADING' });
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.store.dispatch({ type: 'STOP_LOADING' });
        // this.uiService.loadingStateChanged.next(false);
      })
      .catch((error) => {
        // this.uiService.loadingStateChanged.next(false);
        this.store.dispatch({ type: 'STOP_LOADING' });
        this.uiService.showSnackbar(error.message, null, { duration: 3000 });
      });
  }

  logout() {
    this.afAuth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
