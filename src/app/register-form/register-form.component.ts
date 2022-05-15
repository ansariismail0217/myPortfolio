import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  //form group variables declaration
  registerForm:FormGroup;
  submitted:boolean=false;

  //formbuilder dependency injection
  constructor(private builder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm=this.builder.group({
      fName: ["",Validators.required],
      lName: ["",Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required,Validators.minLength(8)]]
    });
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else
      alert("Registration successful! Please Login.");
  }
  get f(){
    return this.registerForm.controls;
  }

}
