
import MovieTable from "./MovieTable";
import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Card, Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemText} from 'reactstrap';

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
            <>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{color:'white',display:'flex', alignItems:'center',justifyItems:'center',width: '600px', height:'auto',backgroundColor:'rgba(255,149,6,.5)',borderRadius: '10px', boxShadow: '0px 2px 7px rgba(0,0,0,1)', margin:'20px'}}>
                                <ListGroup  key={index} style={{width:'500px', paddingTop:'25px', paddingBottom:'25px', borderRadius:'5px'}}>
                                    <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                        <ListGroupItemText style={{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'36px'}}>
                                            {movie.id}
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                        <ListGroupItemText style={{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'36px'}}>
                                            {movie.title}
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                        <ListGroupItemText style={{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'36px'}}>
                                            {movie.review}
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                                        <ListGroupItemText style={{fontFamily: 'Akaya Kanadaka, cursive', fontSize:'36px'}}>
                                            {movie.stars}
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </>
            )
        })

    }
    
    useEffect(() => {
        fetchMovies();
    }, [props.token]);

  return (
    <Container>
        <h3 style={{textAlign:'center',fontSize:'48px', webkitTextStrokeWidth:'1px', webkitTextStrokeColor:'white'}}>Reviews</h3>
      <Row>
        <Col>{reviewMapper()}</Col>
      </Row>
    </Container>
  );
};

export default Reviews;
