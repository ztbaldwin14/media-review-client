import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MovieCreate from './MovieCreate';
import MovieTable from './MovieTable';
import MovieEdit from './MovieEdit';

const MovieIndex = (props) => {
    const [movies, setMovies] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [movieToUpdate, setMovieToUpdate] = useState({});

    const fetchMovies = () => {
        fetch('http://localhost:3000/movies', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then((res) => res.json())
            .then((data) => setMovies(data))
    }

    const editUpdateMovie = (movie) => {
        setMovieToUpdate(movie);
        console.log(movie);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return(
        <Container>
            <Row>
                <Col md='3'>
                    <MovieCreate fetchMovies={fetchMovies} token={props.token} />
                </Col>
                <Col md='9'>
                    <MovieTable movies={movies} editUpdateMovie={editUpdateMovie} updateOn={updateOn} fetchMovies={fetchMovies} token={props.token} />
                </Col>
                {updateActive ? <MovieEdit movieToUpdate={movieToUpdate} updateOff={updateOff} token={props.token} fetchMovies={fetchMovies} /> : <></>}
            </Row>
        </Container>
    )
}

export default MovieIndex;