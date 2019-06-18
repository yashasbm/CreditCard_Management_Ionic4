import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";
  errorMessage: string=null;
  authenticate;


  constructor(public firebaseAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }

  async login() {
    const { email, password } = this;
    try{
      const res = await this.firebaseAuth.auth.signInWithEmailAndPassword(email,password);
      console.log(res);
      this.router.navigate(['/cards']);

    }catch(error){
      console.dir(error);

      if(error.code === "auth/user-not-found"){
        this.errorMessage = "Looks like you have no account! You can register with the link above.";
      }

      else if(error.code === "auth/wrong-password"){
        this.errorMessage = "Incorrect credientials, please check!";
      }

      else if(error.code === "auth/invalid-email"){
        this.errorMessage = "Invalid email, please check!";
      }
    }
  }

}
