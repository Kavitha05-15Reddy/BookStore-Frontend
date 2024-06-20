import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  loginForm! : FormGroup;
  signupForm! : FormGroup;
  showLogin: boolean = true;

  constructor(private formBuilder : FormBuilder,private userService : UserService){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    })
  }

  toggleForm(isLogin: boolean): void {
    this.showLogin = isLogin;
  }

  onSubmitLogin(){
    let reqData = {
      emailId: this.loginForm.value.emailId,
      password: this.loginForm.value.password
    }
    this.userService.login(reqData).subscribe((response:any)=>{
      console.log(response)
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('emailId', response.data.emailId);
      localStorage.setItem('userId', response.data.id);
      localStorage.setItem('fullName', response.data.fullName);
      localStorage.setItem('mobileNo', response.data.mobileNo);
      localStorage.setItem('password', response.data.password);
    })
  }

  onSubmitSignup(){
    let reqData = {
      fullName: this.signupForm.value.fullName,
      emailId: this.signupForm.value.emailId,
      password: this.signupForm.value.password,
      mobileNo: this.signupForm.value.mobileNo,
    }
    this.userService.signup(reqData).subscribe((response:any)=>{
      console.log(response)
    })
  }
 
}
