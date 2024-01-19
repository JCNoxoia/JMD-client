import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://jmd-movie-database-eb9032c631f2.herokuapp.com/movies", {
    method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            releaseYear: doc.releaseYear,
            image: doc.image,
            director: doc.director.name,
            genre: doc.genre.name
          };
        });
        console.log(data);
        setMovies(moviesFromApi);
      });
  }, []);

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