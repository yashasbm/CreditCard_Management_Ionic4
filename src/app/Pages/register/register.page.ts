import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string="";
  password: string="";
  cpassword: string="";

  constructor(public firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async register(){
    const { email, password, cpassword } = this
    if(password !== cpassword){
      return alert("Passwords don't match");
    }

    try{

      const res = await this.firebaseAuth.auth.createUserWithEmailAndPassword(email,password);

    }catch(error){
      console.dir(error);
    }
  }

}
