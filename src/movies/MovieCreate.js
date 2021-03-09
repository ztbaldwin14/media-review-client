import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

const MovieCreate = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [actors, setActors] = useState("");
  const [rating, setRating] = useState("");
  const [runtime, setRuntime] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/movies/create", {
      method: "POST",
      body: JSON.stringify({
        movies: {
          title: title,
          description: description,
          actors: actors,
          rating: rating,
          runtime: runtime,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTitle("");
        setDescription("");
        setActors("");
        setRating("");
        setRuntime();
        props.fetchMovies();
      });
  };


    return(
        <div style={{paddingTop:'100px', width:'100%'}}>
        <Container style={{backgroundColor:'rgba(236,78,32,.5)', width:'100%', marginBottom:'30px', boxShadow: '0px 2px 7px rgba(0,0,0,1)', border:'none', borderRadius:'10px'}}>
            
            <h3 style={{ position:'relative',color: 'black',  webkitTextStrokeWidth:'2px', webkitTextStrokeColor:'white', fontSize:'36pt', textAlign:'center'}}>Add a Movie</h3>
            
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label htmlFor='title' />
                                <Input name='title' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                             </FormGroup>
                </Col>
                <Col xs="6" sm="4">
                <FormGroup>
                    <Label htmlFor='description' />
                    <Input name='description' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>
                </Col>
                <Col xs="6" sm="4">
                <FormGroup>
                    <Label htmlFor='actors' />
                    <Input name='actors' placeholder='actors' value={actors} onChange={(e) => setActors(e.target.value)} />
                </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col xs="6" sm="4">
                <FormGroup>
                    <Label htmlFor='rating' />
                    <Input name='rating' placeholder='rating' value={rating} onChange={(e) => setRating(e.target.value)} />
                </FormGroup>
                </Col>
                <Col xs="6" sm="4">
                <FormGroup>
                    <Label htmlFor='runtime' />
                    <Input name='runtime' placeholder='runtime' value={runtime} onChange={(e) => setRuntime(e.target.value)} />
                </FormGroup>
                </Col>
                <Col xs="6" sm="4">
                <Button type='submit' style={{color: 'black',  webkitTextStrokeWidth:'.2px', webkitTextStrokeColor:'white',backgroundColor:'linear-gradient(to top, #FF9506, #EC4E20)', border:'solid', marginTop:'20px'}}>Click to Submit</Button>
                </Col>
                </Row>
            </Form>
            </Container>
       </div>
    )
}


export default MovieCreate;
