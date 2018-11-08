import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Places} from '../_interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }
 private readonly  API_URL='http://localhost:3000/places';
 addPlaces:Places;
  listar(){
    return this.http.get(this.API_URL);
  }
  crear(places:Places){
    return this.http.post(this.API_URL, places)
  }
  
    eliminar(_id:String){
    return this.http.delete(this.API_URL+`/${_id}`); 
     }
  }
