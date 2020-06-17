import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImage'
})
export class PeliculaImagePipe implements PipeTransform {


  transform(pelicula: any, poster: boolean = false): any {
    //this is for create the url for the image
    let imageSize = 500;
    let imageUrl = `https://image.tmdb.org/t/p/w${imageSize}`;

    if (poster) {
      return imageUrl + pelicula.poster_path;
    }

    if (pelicula.backdrop_path) {
      return imageUrl + pelicula.backdrop_path
    } else {
      if (pelicula.poster_path) {
        return imageUrl + pelicula.poster_path
      } else {
        return "assets/img/noimage.jpg"
      }
    }
  }
}
