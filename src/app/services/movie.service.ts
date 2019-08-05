import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
apiURL: string = 'https://api.themoviedb.org/3';
apiKey: string = '01b10d28ed8e121a471d61568febbd91';


  constructor(private http: HttpClient) {}


  /**
   * Récupération des films les plus populaires
   * 
   * https://api.themoviedb.org/3/movie/popular?api_key=01b10d28ed8e121a471d61568febbd91&language=fr-FR&page=1
   */
  getPopularMovies(): Promise<any> {
    return this.http.get(this.apiURL+'/movie/popular?api_key='+this.apiKey+'&language=fr-FR&page=1')
    .toPromise()
    // Après avoir reçu la réponse, on ne récupère que la clé résults avec la liste dans films ( result fait déjà partie de l'api)
    .then(response => response.results);
  }

  /**
   * Récupère les détails d'un film
   */
  getMovie(id: number){}

}
