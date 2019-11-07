import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  edit:any;
  id:any;
  bindData:any;
  display:any={
   productName:'',
   price:'',
   weight:''
  }
  constructor( private service:ServiceService,public routing:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    this.id=this.routing.snapshot.params['id'];
    console.log(this.id);
    this.service.getDatas(this.id).subscribe(res=>{
      this.display=res;
    });
  }

  studentUpdates(value){
    let data = {
      productName:value.productName,
      price:value.price,
      weight:value.weight
    }
    this.id=this.routing.snapshot.params['id'];
    console.log('the id am passing --------' ,this.id);  
    console.log('value am passing ----------', value)
    this.service.updateData(this.id,data).subscribe(res=>{
    this.bindData=res;
    
    this.router.navigate(['order-list']);
    })
  }

}
