import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MovieCreate from "./MovieCreate";
import MovieTable from "./MovieTable";
import MovieEdit from "./MovieEdit";
import Carousel from "./Carousel";
import APIURL from '../helpers/environment';


const MovieIndex = (props) => {
  const [movies, setMovies] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [movieToUpdate, setMovieToUpdate] = useState({});

  const fetchMovies = () => {
    fetch(`${APIURL}/movies`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => setMovies(data));
  };

  const editUpdateMovie = (movie) => {
    setMovieToUpdate(movie);
    console.log(movie);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
      <Row>
        <Carousel />
      </Row>
      <hr />
      <Row>
        <Col>
          <MovieCreate fetchMovies={fetchMovies} token={props.token} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MovieTable
            movies={movies}
            editUpdateMovie={editUpdateMovie}
            updateOn={updateOn}
            fetchMovies={fetchMovies}
            token={props.token}
            movieToUpdate={movieToUpdate}
          />
        </Col>
      </Row>
      {updateActive ? (
        <MovieEdit
          movieToUpdate={movieToUpdate}
          updateOff={updateOff}
          token={props.token}
          fetchMovies={fetchMovies}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default MovieIndex;
