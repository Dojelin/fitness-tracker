
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();
    private user =<User>{};

    constructor(private router: Router){}

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authSuccessfully();
    }

    login(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authSuccessfully();
    }

    logout(){
        this.user = <User>{};
        this.authChange.next(false);
        this.router.navigate(["./loging"])
    }

    getUser(){
        return { ...this.user};
    }

    isAuth() {
        return JSON.stringify(this.user) !=  '{}';
    }

    authSuccessfully(){
        this.authChange.next(true);
        this.router.navigate(["./training"])
    }
}