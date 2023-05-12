import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LogingComponent } from './loging/loging.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SignupComponent, LogingComponent],
  imports: [AngularFireAuthModule, SharedModule, AuthRoutingModule],
  exports: [],
})
export class AuthModule {}
