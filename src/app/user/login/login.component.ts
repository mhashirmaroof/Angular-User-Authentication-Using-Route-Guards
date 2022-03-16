import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   arr1: any = [];
   alertmsg :any;

  constructor(private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    psw: new FormControl(''),
  })

  logedIn(){
    let data = JSON.parse (localStorage.getItem("formdata") || '') 
     let value = data.find((element: any) => 
     this.loginForm.value.email == element.email && this.loginForm.value.psw == element.psw);

     if(value != null){
      this.router.navigate(['/home']);
      this.arr1.push(this.loginForm.value);
      localStorage.setItem("logindata", JSON.stringify(this.arr1));
   }
   else{
     this.alertmsg = "No user found! Please Regsiter First"
   }
  }


  ngOnInit(): void {
  }
}
