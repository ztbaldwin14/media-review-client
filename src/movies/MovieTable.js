import React from 'react';
import {Button, Card, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Container, Row, Col} from 'reactstrap';

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
                <Container>
                    <Row>
                <Col>
                <CardGroup>
                    <Card style={{width:'100px', backgroundColor:'#026FB9', margin:'10px', border:'outset', borderRadius:'10pt', flexDirection:'row'}}>
                        <CardImg style={{width:'182px', height:'268px', margin:'10px'}} src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle tag="h3" style={{color:'black'}}>Title:  {movie.title}</CardTitle>
                        <CardSubtitle tag="h4" style={{color:'black'}}>Details:</CardSubtitle>
                        <ul key={index}>
                        <CardText style={{color:'black'}}>ID:  {movie.ownerid}</CardText>
                        <CardText style={{color:'black'}}>Description:  {movie.description}</CardText>
                        <CardText style={{color:'black'}}>Actors:  {movie.actors}</CardText>
                        <CardText style={{color:'black'}}>Rating:  {movie.rating}</CardText>
                        <CardText style={{color:'black'}}>Runtime:  {movie.runtime}</CardText>
                        </ul>
                        </CardBody>
                        <CardBody style={{display:'flex', alignItems:'flex-end', marginRight:'auto', textAlign:'right'}}>
                        <Button style={{ backgroundColor: '#FF9506', color:'black', border:'solid'}} onClick={() => {props.editUpdateMovie(movie); props.updateOn()}}>Update</Button>
                        <Button style={{ backgroundColor: '#EA4E33', color:'black', border:'solid'}} onClick={() => {deleteMovie(movie)}}>Delete</Button>
                        </CardBody>
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
            <div>
                {movieMapper()}
            </div>
            
      {/* <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card> */}
    
    </>
  );
};

export default MovieTable;