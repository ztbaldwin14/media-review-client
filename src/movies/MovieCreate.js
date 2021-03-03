    import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const MovieCreate = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [actors, setActors] = useState('');
    const [rating, setRating] = useState('');
    const [runtime, setRuntime] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/movies/create', {
            method: 'POST',
            body: JSON.stringify({movies: {title: title, description: description, actors: actors, rating: rating, runtime: runtime}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTitle('');
                setDescription('');
                setActors('');
                setRating('');
                setRuntime();
                props.fetchMovies();
            })
    }

    return(
        <>
        <Container style={{backgroundColor:'#EA4E33', width:'100%', marginBottom:'30px', border:'outset', borderRadius:'10px'}}>
            
            <h3 style={{ color: 'black', position:'relative', webkitTextStrokeWidth:'.5px', webkitTextStrokeColor:'black', fontSize:'28pt', textAlign:'center'}}>Add a Movie</h3>
            
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
                <Button type='submit' style={{backgroundColor:'#026FB9', border:'outset', borderColor: 'black', marginTop:'20px'}}>Click to Submit</Button>
                </Col>
                </Row>
            </Form>
            </Container>
       </>
    )
}

export default MovieCreate;