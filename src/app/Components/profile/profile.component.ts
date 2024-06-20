import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  name:any;
  emailId:any;
  password:any;
  mobileNo:any;
  
  ngOnInit(): void {
    this.name=localStorage.getItem('fullName')
    this.emailId=localStorage.getItem('emailId')
    this.password=localStorage.getItem('password')
    this.mobileNo=localStorage.getItem('mobileNo')
  }

}
