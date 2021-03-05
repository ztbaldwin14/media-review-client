import React, { useState } from 'react';
import {Button, Card, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Container, Row, Col } from 'reactstrap';
import ReactStars from 'react-rating-stars-component';
import reel from '../images/reelimage.PNG';

const MovieTable = (props) => {
    const [stars, setStars] = useState();
    const [review, setReview] = useState('');

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

    const reviewMovie = (movie) => {
        fetch(`http://localhost:3000/movies/${movie.id}`, {
            method: 'PUT',
            body: JSON.stringify({movies: {stars: stars, review: review }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchMovies();
        })
    }

    const movieMapper = () => {
      
        return props.movies.map((movie, index) => {
            return(
                <Container key={index}>
                    <Row>
                <Col>
                <CardGroup>
                    <Card style={{width:'100px', backgroundColor:'#026FB9', margin:'10px', border:'outset', borderRadius:'10pt', flexDirection:'row'}}>
                        <CardImg style={{width:'182px', height:'268px', margin:'10px'}}  alt="Card image cap" src={reel} />
                        <CardBody>
                        <CardTitle tag="h3" style={{color:'black'}}>Title:  {movie.title}</CardTitle>
                        <CardSubtitle tag="h4" style={{color:'black'}}>Details:</CardSubtitle>
                        <ul key={index}>
                        <CardText style={{color:'black'}}>Description:  {movie.description}</CardText>
                        <CardText style={{color:'black'}}>Actors:  {movie.actors}</CardText>
                        <CardText style={{color:'black'}}>Rating:  {movie.rating}</CardText>
                        <CardText style={{color:'black'}}>Runtime:  {movie.runtime}</CardText>
                        </ul>
                        </CardBody>
                        <Col style={{marginRight: '20px'}}>
                            <ReactStars name={`${Math.random()*10}}`} value={stars} count={5} onChange={e => setStars(e)} size={24} activeColor='#FF9506' />
                            <textarea name='review' value={props.review} onChange={(e) => setReview(e.target.value)} placeholder='Leave Review Here' style={{marginTop: '10px', height: '100px', width: '250px', border: 'solid'}}></textarea>
                            <Button style={{ backgroundColor: '#026FB9', color: 'black', border: 'solid'}} type='button' onClick={(e) => {reviewMovie(movie)}}>Submit Review</Button>
                            <CardBody style={{display:'flex', alignItems:'flex-end', marginRight:'auto', textAlign:'right'}}>
                            <Button style={{ backgroundColor: '#FF9506', color:'black', border:'solid'}} onClick={() => {props.editUpdateMovie(movie); props.updateOn()}}>Update</Button>
                            <Button style={{ backgroundColor: '#EA4E33', color:'black', border:'solid'}} onClick={() => {deleteMovie(movie)}}>Delete</Button>
                            </CardBody>
                        </Col>
                    </Card>                    
                    </CardGroup>
                    </Col>
                    </Row>
                </Container>
            )
        })
    }
    return(
        <>
            <h3 style={{ color: '#FF9506', textAlign:'center', fontSize:'28pt'}}>Fan Reviews</h3>
            <hr />
            <div style={{marginBottom: '30px'}}>
                {movieMapper()}
            </div>
        </>
  );
};

export default MovieTable;