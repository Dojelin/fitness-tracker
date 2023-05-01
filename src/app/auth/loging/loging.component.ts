import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService:AuthService){
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required]})
    })
  }


  ngOnInit(){}

  onSubmit(){
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })
  }
}
