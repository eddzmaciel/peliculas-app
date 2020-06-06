import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = "6b8eae4afa3e85ee59f7a4dbd962e94b";
  private apiUrl: string = "https://api.themoviedb.org/3";

  //this is for create the url for the image
  public imagePath: string = `https://image.tmdb.org/t/p/`;
  public imageSize = 300;
  public imageUrl = `https://image.tmdb.org/t/p/w`;

  constructor(private http: HttpClient) {
    console.log(this.imageUrl);
  }


  getMostPopular() {
    let url = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    console.log('Testing the service');
    return this.http.get(url).subscribe(res => {
      console.log(res)
    });
  }

  findMovie(concept: string) {
    let url = `${this.apiUrl}/search/movie?query=${concept}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url).subscribe(res => {
      console.log(res)
    });
  }


}

