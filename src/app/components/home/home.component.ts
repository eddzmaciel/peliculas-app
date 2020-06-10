import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartelera: any;
  populares: any;
  popularesNinos: any;
  constructor(public peliculasService: PeliculasService) {
    this.peliculasService.getPopularesKids().subscribe((resp: any) => {
      this.popularesNinos = resp.results;
    });
    this.peliculasService.getMostPopular().subscribe((resp: any) => {
      this.populares = resp.results;
    });
    this.peliculasService.getCartelera().subscribe((resp: any) => {
      this.cartelera = resp.results;
    });
  }

  ngOnInit() {
  }

}
