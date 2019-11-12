import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
hide=true;
  username:String;
  password:String;

  constructor( private service:ServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  
  }

  // onSubmit(value){
  //   let name = this.username
  //    localStorage.setItem('view',name);
  //    this.service.signIn(value).add(data=>{
  //     this.view=data;
  //     console.log(this.view);
  //       if(this.view != 1){

  //       }
  //       else{
  //         alert('Welcome');
  //         this.router.navigate(['/order']);
  //       } 
  //   });
  // }

  loginUser(value) {
    this.service.logIn(value)
  }

}
