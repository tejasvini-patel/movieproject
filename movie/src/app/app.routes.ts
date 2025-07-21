// routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'movie-form',
    pathMatch: 'full'
  },
  {
    path: 'movie-form',
    loadComponent: () =>
      import('./movieform/movieform.component').then(m => m.MovieformComponent)
  },
  {
    path: 'movie-list',
    loadComponent: () =>
      import('./movielist/movielist.component').then(m => m.MovielistComponent)
  }
];
