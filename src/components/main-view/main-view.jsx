import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Howl\'s Moving Castle",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg",
      director: "Hayao Miyazaki",
      genre: "Adventure"
    },
    {
      id: 2,
      title: "American Psycho",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/American_Psycho.png",
      director: "Mary Harron",
      genre: "Thriller"
    },
    {
      id: 3,
      title: "Hot Fuzz",
      image: "https://imgs.search.brave.com/H39Ai9jo-W70UUOzw25NXPFvz7aAhTWXhmaF39tU5KI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16ZzRNREpo/TURNdFltSmlNUzAw/WkRabUxUaG1aV1V0/WVRNd1pETTFZVGM1/TVdFMlhrRXlYa0Zx/Y0dkZVFYVnlOalUw/T1RRME9UWUAuanBn",
      director: "Edgar Wright",
      genre: "Action"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => {
          setSelectedMovie(null);
        }}
      />
    );
  }

  if (movies.length === 0) {
    return <div>No movies found in this list.</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};