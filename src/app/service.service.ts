import { Injectable } from '@angular/core';
import { UserModule } from './user/user.module';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
bindData:any[];
mydata:any;
headers = new HttpHeaders().set('Content-Type', 'application/json');
currentUser = {};
baseURl = 'http://localhost:8080/endpoint/'
signurl = 'http://localhost:8080/admin/'
loginurl ='http://localhost:8080/user/'
  constructor( public http:HttpClient,private router:Router,private routing:ActivatedRoute) { }

  sendData(value){
    return this.http.post(this.baseURl+'order',value)
    .pipe(map(data=>this.mydata=data))
  }


  getDatas(id){
    let url=this.baseURl+'/get-order/'+id;
    return this.http.get(url)
    .pipe(map(data=>this.mydata=data))
  }

  getData(){
    return this.http.get(this.baseURl+'')
    .pipe(map(data=>this.mydata=data))
  }

  Datadeletes(_id){
    let url=this.baseURl+'remove-order'+_id;
    return this.http.get(url)
    .pipe(map(data=>this.mydata=data))
  }

  Datadelete(value){ 
    return this.http.delete(this.baseURl+'remove-order/'+value)
    .pipe(map(data=>this.mydata=data))
  }
  

  updateData(id, value){ 
    return this.http.put(this.baseURl+'update-order/' +id, value)
    .pipe(map(data=> {
      console.log('data ------------', data)
      return this.mydata=data;
    })
  )   
  }


  sendAdmin(value){
    return this.http.post(this.signurl+'register',value)
    .pipe(map(data=>this.mydata=data))
  }


  logIn(user: UserModule){
    return this.http.post(`${this.loginurl}login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          Swal.fire(
            'login successfully',
            '',
            'success'
          )
          this.router.navigate(['/order']);
        })
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      Swal.fire({
        title: 'Logout?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
       }).then((result) => { 
          if (result.value===true) { 
      this.router.navigate(['/login']); 
          }
        })
    }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.signurl}get-admin/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }


  getOrder(){
    return this.http.get(this.baseURl+'/',name)
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
