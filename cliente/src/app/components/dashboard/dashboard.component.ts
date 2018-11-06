import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../../_services/places.service';
import {Places} from '../../_interfaces/places';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  places:Places[] = [];
  lugares:any={};
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.listarLugares();
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
}

