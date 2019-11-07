import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
view:any;
Data:any;
  constructor( private service:ServiceService) { }

  ngOnInit() {
    this.service.getOrder().subscribe(data=>{
      this.view=data;
      console.log(data);
    });
  }

  del(value){    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Data!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
  this.service.Datadelete(value).subscribe(res=>{
    this.ngOnInit();
        Swal.fire(
          'Deleted!',
          'Your Data has been deleted.',
          'success'
        )
       
  })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Data is safe :)',
          'error'
        )
      }
    })





    
    
}



}
