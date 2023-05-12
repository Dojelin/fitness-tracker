import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LogingComponent } from './loging/loging.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SignupComponent, LogingComponent],
  imports: [ReactiveFormsModule, AngularFireAuthModule, SharedModule],
  exports: [],
})
export class AuthModule {}
