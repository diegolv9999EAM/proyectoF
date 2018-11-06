import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../../_services/places.service';
import {Places} from '../../_interfaces/places';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  places:Places[] = [];
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
}
