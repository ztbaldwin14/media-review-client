import React from 'react';
import { Table, Button } from 'reactstrap';

const MovieTable = (props) => {
    const deleteMovie = (movie) => {
        fetch(`http://localhost:3000/movies/${movie.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchMovies())
    }

    const movieMapper = () => {
        return props.movies.map((movie, index) => {
            return(
                <tr key={index}>
                    <th scope='row'>{movie.ownerid}</th>
                    <th>{movie.title}</th>
                    <th>{movie.description}</th>
                    <th>{movie.actors}</th>
                    <th>{movie.rating}</th>
                    <th>{movie.runtime}</th>
                    <td>
                        <Button color='warning' onClick={() => {props.editUpdateMovie(movie); props.updateOn()}}>Update</Button>
                        <Button color='danger' onClick={() => {deleteMovie(movie)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
            <h3>Movies</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actors</th>
                        <th>Rating</th>
                        <th>Runtime</th>
                    </tr>
                </thead>
                <tbody>
                    {movieMapper()}
                </tbody>
            </Table>
        </>
    )
}

export default MovieTable;