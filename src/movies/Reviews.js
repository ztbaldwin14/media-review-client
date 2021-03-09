import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemText} from 'reactstrap';
import APIURL from '../helpers/environment';


const Reviews = (props) => {
  const [movies, setMovies] = useState([]);


    function fetchMovies(){
        fetch(`${APIURL}/movies`, {
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

                <>
                    <div>
                        <Card style={{color:'white',backgroundColor:'rgba(255,149,6,.5)',borderRadius: '10px', boxShadow: '0px 2px 7px rgba(0,0,0,1)', padding:'10px'}}>
                            <ListGroup  key={index} style={{ padding:'25px', borderRadius:'5px'}}>
                                <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                    <ListGroupItemText style={{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'18px'}}>
                                        ID: {movie.id}
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                    <ListGroupItemText style={{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'18px'}}>
                                        Title: {movie.title}
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                    <ListGroupItemText style={{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'18px'}}>
                                        Review: {movie.review}
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                    <ListGroupItemText style={{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'18px'}}>
                                        Stars: {movie.stars}
                                    </ListGroupItemText>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </div>
                </>
            )
        })
    }

    useEffect(() => {
    fetchMovies();
  }, [props.token]);

  return (
    <div className='wrapper'>
            {reviewMapper()}
    </div>
  );
};

export default Reviews;
        {/* <Card.Body key={index}>
                                    <Card.Title>Title: {movie.title}</Card.Title>
                                    <Card.Text>
                                        ID: {movie.id}
                                    </Card.Text>
                                    <Card.Text>
                                        Review: {movie.review}
                                    </Card.Text>
                                    <Card.Text>
                                        Rating{movie.stars}
                                    </Card.Text>
                                </Card.Body> */}
                                // ,display:'flex',flexWrap:'wrap', justifyContent:'space-between',flexBasis: '15em'

