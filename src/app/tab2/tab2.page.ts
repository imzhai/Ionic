import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
movies: Object[] = [];


  constructor(
    private movieService: MovieService,
    private router: Router
    ) {}


  // Quand on arrive sur l'onglet, on va chercher les films sur l'API
  ngOnInit() {
    this.movieService.getPopularMovies().then(movies => this.movies = movies);
  }

  navToMovie(id: number){
    this.router.navigate(['/movie-single', id]);
  }

}
