import { Component, OnInit } from '@angular/core';

import {PlacesService} from '../../_services/places.service';
import {Places} from '../../_interfaces/places';

import{UsersService} from '../../_services/users.service';
import {Users} from '../../_interfaces/users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  places:Places[] = [];
  lugares:any={};

  users:Users[] =[];
  usuarios:any={};
  constructor(private placesService: PlacesService,private usersService: UsersService) { }

  ngOnInit() {
    this.listarLugares();
    this.listarUsuarios();
  }
   listarLugares(){
     this.placesService.listar().subscribe((places: Places[])=> {
     //  console.log(places);
     this.places = places;
     });
    }
    crearLugar(lugares){
     //console.log(lugares);
     this.placesService.crear(lugares).subscribe(lugares => {
      this.lugares=lugares;
      this.listarLugares();
    })
    }
    eliminarlugar(_id: String){
      this.placesService.eliminar(_id).subscribe(res =>{
       // console.log(res);
        this.listarLugares();
      })

    }
 // ---------------------------------------- 
 listarUsuarios(){
  this.usersService.listar().subscribe((users: Users[])=> {
  //  console.log(places);
  this.users = users;
  });
 }

 crearUsuario(usuarios){
  //console.log(lugares);
  this.usersService.crear(usuarios).subscribe(usuarios => {
   this.usuarios=usuarios;
   this.listarUsuarios();
 })
 }

}

