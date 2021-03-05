import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import ReactStars from 'react-rating-stars-component';

const Reviews = (props) => {
    const [movies, setMovies] = useState([]);

    function fetchMovies(){
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

    const reviewMapper = () => {
        return movies.map((movie, index) => {
            return(
                <tr key={index}>
                    <td>{movie.title}</td>
                    <td>{movie.review}</td>
                    <td><ReactStars value={movie.stars} edit={false} count={5} size={24} activeColor='#FF9506' /></td>
                    <td>
                        <Button>Update Review</Button>
                    </td>
                </tr>
            )
        })
    }
    
    useEffect(() => {
        if (!props.token) {
            return
        }
        
        fetchMovies();
    }, [props.token]);
    
    return(
        <Container>
            <Row>
                <Col>
                    {reviewMapper()}
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews;