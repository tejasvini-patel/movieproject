import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id?: number;
  name: string;
  casting: string;
  releaseDate: string;
  director: string;
  producer: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 private apiUrl = 'http://127.0.0.1:5000/api/movies'; // ✅ This must match Flask
// Flask API

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  addMovie(movie: Movie): Observable<any> {
    return this.http.post(this.apiUrl, movie);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
