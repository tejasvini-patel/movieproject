import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie, MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movielist.component.html'
})
export class MovielistComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe(data => this.movies = data);
  }

  // deleteMovie(id: number) {
  //   this.movieService.deleteMovie(id).subscribe(() => this.loadMovies());
  // }
  getMovies() {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      }
    });
  }
  deleteMovie(id: number) {
  const confirmed = confirm('Are you sure you want to delete this movie?');

  if (confirmed) {
    this.movieService.deleteMovie(id).subscribe({
      next: () => {
        alert('Movie deleted successfully');
        this.getMovies(); // Refresh the list after deletion
      },
      error: (err) => {
        console.error('Delete failed:', err);
        alert('Failed to delete movie');
      }
    });
  }
}

}
