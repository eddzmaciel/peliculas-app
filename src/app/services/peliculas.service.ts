import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = "6b8eae4afa3e85ee59f7a4dbd962e94b";
  private apiUrl: string = "https://api.themoviedb.org/3";

  peliculas: any[] = [];

  //this is for create the url for the image
  public imagePath: string = `https://image.tmdb.org/t/p/`;
  public imageSize = 300;
  public imageUrl = `https://image.tmdb.org/t/p/w`;

  constructor(private http: HttpClient) {
    console.log(this.imageUrl);
  }


  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;
    let url = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&primary_release_date.gte=${'2019-09-15'}&primary_release_date.lte=${'2019-10-22'}&language=en-US`;
    return this.http.get(url);
  }

  getMostPopular() {
    let url = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    return this.http.get(url);
  }

  getPopularesKids() {
    let url = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc`;
    return this.http.get(url);
  }

  buscarPelicula(concept: string) {
    let url = `${this.apiUrl}/search/movie?query=${concept}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    this.http.get(url).subscribe((res: any) => {
      this.peliculas = res.results;
      console.log('this.peliculas:', this.peliculas);
    });
  }


  getPelicula(id: string) {
    let url = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

}

