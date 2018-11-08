import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../_services/users.service';
import {Users} from '../../_interfaces/users';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users:Users[] =[];
  usuarios:any={};
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.listarUsuarios();
  }
  listarUsuarios(){
     this.usersService.listar().subscribe((users: Users[])=> {
     //  console.log(users);
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
