import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  edit:any;
  id:any;
  bindData:any;
data:any={
  productName:'',
  price:'',
  weight:''
}
name:any;
  constructor( private service:ServiceService,private router:Router,private routing:ActivatedRoute) { }

  ngOnInit() {
    
  }

  onSubmit(value){
   value.username = localStorage.getItem("view");
    this.service.sendData(value).subscribe(res=>{
      this.data=res;
      console.log(this.data)
      alert('successfully added');
      this.router.navigate(['/order-list']);
    });
  }
}
