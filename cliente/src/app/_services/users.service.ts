import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{ Users} from '../_interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  private readonly  API_URL='http://localhost:3000/users';
  addUsers:Users;
   listar(){
     return this.http.get(this.API_URL);
   }
   crear(users:Users){
     return this.http.post(this.API_URL, users)
   }
   
     eliminar(_id:String){
     return this.http.delete(this.API_URL+`/${_id}`); 
      }
   }
