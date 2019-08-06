import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.page.html',
  styleUrls: ['./movie-single.page.scss']

})
export class MovieSinglePage implements OnInit {
movie: Object = [];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // On récupère l'id du film cliqué
    let id= this.route.snapshot.params.id;
    console.log(id);
    this.movieService.getMovie(id).then(movie => this.movie = movie);

  }

}
