import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
admin:any={
  username:'',
  emailid:'',
  password:''
}
  constructor( private service:ServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(value){   
    this.service.sendAdmin(value).subscribe(data=>{
      this.admin=data;
      console.log(this.admin)
      alert('successfully added');
      this.router.navigate(['/login']);
    });
  }

}

