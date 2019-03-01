import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

//import{map} from'rxjs/add/operator/map';

@Injectable()
export class PostsService {
   headers: HttpHeaders;


  constructor(private http: HttpClient) {


  }


  changepassword(body):any//
  {
    return this.http.put('/api/updatepassword',body,{
           headers: new HttpHeaders({'Content-type': 'application/json',
   'x-auth': localStorage.getItem('token')}),observe: 'response'});
  }


  account():any  //account information
  {


     return this.http.get('api/findone',{
            headers: new HttpHeaders({'Authorization': 'my-auth-token',
    'x-auth':localStorage.getItem('token')}),observe: 'response'});//.pipe(map((res:any) => res));
  }

  signin(body):any  //login
  {
console.log(body);
    return this.http.post('/api/signin',body,{
           headers: new HttpHeaders({'Content-type': 'application/json',
   'x-auth': 'x-value'}),observe: 'response'});
  }

  signup(body):any  //sign up
  {
    return this.http.post('/api/signup',body,{
           headers: new HttpHeaders({'Content-type': 'application/json',
   'x-auth': 'x-value'}),observe: 'response'});
  }

  passwordcheck(body):any  //check password in db
  {
    return this.http.post('/api/check',body,{
           headers: new HttpHeaders({'Content-type': 'application/json',
   'x-auth': localStorage.getItem('token')}),observe: 'response'});
  }

  deleteaccount():any  //delete user account
  {
    return this.http.delete('/api/delete' ,{
           headers: new HttpHeaders({'Content-type': 'application/json',
   'x-auth': localStorage.getItem('token')}),observe: 'response'});
  }
}
