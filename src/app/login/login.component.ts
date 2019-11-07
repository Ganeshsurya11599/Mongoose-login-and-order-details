import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
hide=true;
view:any;
Data:any;
username:string;
password:string;
  constructor( private service:ServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(value){
    let name = this.username
     localStorage.setItem('view',name);
     this.service.sendLogin(value).subscribe(data=>{
      this.view=data;
      console.log(this.view);
      for(let i=0;i<this.view.length;i++){
        if(this.username != this.view[i].username && this.password != this.view[i].password){

        }
        else{
          alert('Welcome');
          this.router.navigate(['/order']);
        }
      }      
    });
  }

}
