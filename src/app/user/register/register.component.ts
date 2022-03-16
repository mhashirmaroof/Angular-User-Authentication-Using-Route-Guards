import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  arr:any = [];

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    psw: new FormControl(''),
  })

  collectData(){
    console.log(this.registerForm.value);
    this.arr.push(this.registerForm.value)
    localStorage.setItem("formdata", JSON.stringify(this.arr));
    this.registerForm.reset();
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
