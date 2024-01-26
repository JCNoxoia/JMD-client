import PropTypes from "proptypes";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card onClick={() => onMovieClick(movie)} className="h-100">
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.string,
    director: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};