import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieformComponent } from './movieform.component';

describe('Movieform', () => {
  let component: MovieformComponent;
  let fixture: ComponentFixture<MovieformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
