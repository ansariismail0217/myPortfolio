import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  //form group variables declaration
  registerForm: FormGroup;
  submitted:boolean = false;

  //form builder dependency injection
  constructor(private builder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm=this.builder.group({
      fullName: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else
      return this.registerForm.controls;
  }
  gotoPortfolio(){
    this.router.navigateByUrl('/portfolio');
  }
  get f(){
    return this.registerForm.controls;
  }

}
