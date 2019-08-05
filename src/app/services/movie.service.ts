import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
apiURL: string = 'https://developers.themoviedb.org/3';
apiKey: string = '01b10d28ed8e121a471d61568febbd91';


  constructor() {}


  /**
   * Récupération des films les plus populaires
   * 
https://api.themoviedb.org/3/movie/popular?api_key=01b10d28ed8e121a471d61568febbd91&language=fr-FR&page=1
   */
  getPopularMovies(){}

  /**
   * Récupère les détails d'un film
   */
  getMovie(id: number){}

}
