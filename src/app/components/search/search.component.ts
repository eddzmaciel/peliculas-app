import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {
  public buscar: string = "";

  constructor(public peliculasService: PeliculasService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log('params:', params);
      if (params['texto']) {
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
    });
  }

  ngOnInit() {

  }

  buscarPelicula() {
    console.log('search buscarPelicula:');
    if (this.buscar.length == 0) {
      return;
    }
    this.peliculasService.buscarPelicula(this.buscar);

  }
}
