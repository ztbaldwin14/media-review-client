
import React, { useState } from 'react';
import {Button, Card, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Container, Row, Col, ListGroupItem, ListGroup, ListGroupItemHeading,ListGroupItemText} from 'reactstrap';
import ReactStars from 'react-rating-stars-component';
import reel from '../images/reelimage.PNG';
import APIURL from '../helpers/environment';

const MovieTable = (props) => {
  const [stars, setStars] = useState();
  const [review, setReview] = useState("");

  const deleteMovie = (movie) => {
    fetch(`${APIURL}/movies/${movie.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchMovies());
  };

  const reviewMovie = (movie) => {
    fetch(`${APIURL}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify({ movies: { stars: stars, review: review } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchMovies();
    });
  };


    const movieMapper = () => {

        const style={text:{color:'white'},
        
    }  
        return props.movies.map((movie, index) => {
            return(
                <Container key={index}>
                <CardGroup>
                    <Card className='cardTable' style={{color: 'white', backgroundColor: 'rgba(2,111,185,.5)', margin:'10px', flexDirection:'row',}}>
                        <CardImg style={{ transform: 'translate(5%, 50%)', display:'flex', justifyContent:'center', alignItems:'center', width:'182px', height:'268px'}} src="reel" alt="Card image cap" />
                        <CardBody>
                        <ListGroup key={index} style={{width:'540px'}}>
                            <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                <ListGroupItemHeading style={style.text,{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'36px'}}>Title: {movie.title}</ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                <ListGroupItemText style={style.text,{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'24px'}}>Description:  {movie.description}</ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                <ListGroupItemText style={style.text,{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'24px'}}>Actors:  {movie.actors}</ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                <ListGroupItemText style={style.text,{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'24px'}}>Rating:  {movie.rating}</ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                <ListGroupItemText style={style.text,{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'24px'}}>Runtime:  {movie.runtime}</ListGroupItemText>
                            </ListGroupItem>
                        </ListGroup>
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
                </Container>
            )
        })
    }
    return(
        <>
            <h3 style={{paddingTop:'300px', textAlign:'center', fontSize:'36pt',color: 'black', WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'white'}}>Movies</h3>
            
            <div>
                {movieMapper()}
            </div>
        </>
  );
};

export default MovieTable;
