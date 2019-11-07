import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
bindData:any[];
mydata:any;
baseURl = 'http://localhost:8080/endpoint/'
signurl = 'http://localhost:8080/admin/'
  constructor( public http:HttpClient) { }

  sendData(value){
    return this.http.post(this.baseURl+'create-student',value)
    .pipe(map(data=>this.mydata=data))
  }


  getDatas(id){
    let url=this.baseURl+'/get-student/'+id;
    return this.http.get(url)
    .pipe(map(data=>this.mydata=data))
  }

  getData(){
    return this.http.get(this.baseURl+'')
    .pipe(map(data=>this.mydata=data))
  }

  Datadeletes(_id){
    let url=this.baseURl+'remove-student'+_id;
    return this.http.get(url)
    .pipe(map(data=>this.mydata=data))
  }

  Datadelete(value){ 
    return this.http.delete(this.baseURl+'remove-student/'+value)
    .pipe(map(data=>this.mydata=data))
  }
  

  updateData(id, value){ 
    return this.http.put(this.baseURl+'update-student/' +id, value)
    .pipe(map(data=> {
      console.log('data ------------', data)
      return this.mydata=data;
    })
  )   
  }


  sendAdmin(value){
    return this.http.post(this.signurl+'create-admin',value)
    .pipe(map(data=>this.mydata=data))
  }

  sendLogin(value){
    return this.http.post(this.signurl+'read-admin',value)
    .pipe(map(data=>this.mydata=data))
  } 

  getOrder(){
    const name={username:localStorage.getItem('view')}
    return this.http.post(this.baseURl+'order',name)
    .pipe(map(data=>this.mydata=data))
  }

  getadmins(id){
    let url=this.signurl+'/get-admin/'+id;
    return this.http.get(url)
    .pipe(map(data=>this.mydata=data))
  }

  getAdmin(){
    return this.http.get(this.signurl+'')
    .pipe(map(data=>this.mydata=data))
  }

  Admindeletes(_id){
    let url=this.signurl+'remove-admin'+_id;
    return this.http.get(url)
    .pipe(map(data=>this.mydata=data))
  }

  Admindelete(value){ 
    return this.http.delete(this.signurl+'remove-admin/'+value)
    .pipe(map(data=>this.mydata=data))
  }
  

  updateAdmin(id, value){ 
    return this.http.put(this.signurl+'update-admin/' +id, value)
    .pipe(map(data=> {
      console.log('data ------------', data)
      return this.mydata=data;
    })
  )   
  }

}
