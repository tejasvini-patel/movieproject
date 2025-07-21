import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import this
import { CommonModule } from '@angular/common'; // Also good practice
import { MovieService, Movie } from '..//services/movie.service';

@Component({
  selector: 'app-movieform',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './movieform.component.html',
})
export class MovieformComponent {
  movie: Movie = {
    name: '',
    casting: '',
    releaseDate: '',
    director: '',
    producer: ''
  };

  constructor(private movieService: MovieService) {}

  submitMovie() {
    console.log('Submitting movie:', this.movie); // debug line
    this.movieService.addMovie(this.movie).subscribe({
      next: () => {
        alert('Movie added successfully!');
        this.movie = {
          name: '',
          casting: '',
          releaseDate: '',
          director: '',
          producer: ''
        };
      },
      error: (err) => {
        console.error('Error adding movie:', err);
        alert('Failed to add movie. See console for details.');
      }
    });
  }
}


