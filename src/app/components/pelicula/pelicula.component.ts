import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA: string = '';
  busqueda: string = '';
  constructor(public peliculasService: PeliculasService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log('params:', params);
      this.regresarA = params['pag'];
      if (params['busqueda']) {
        this.busqueda = params['busqueda'];
      }
      this.peliculasService.getPelicula(params['id']).subscribe(pelicula => {
        this.pelicula = pelicula;
        console.log(pelicula);
      });

    });
  }


  ngOnInit() {
  }

}
