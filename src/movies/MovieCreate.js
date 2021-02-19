import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const MovieCreate = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [actors, setActors] = useState('');
    const [rating, setRating] = useState('');
    const [runtime, setRuntime] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/movie/', {
            method: 'POST',
            body: JSON.stringify({movie: {title: title, description: description, actors: actors, rating: rating, runtime: runtime}}),
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
                setRuntime('');
                props.fetchMovies();
            })
    }

    return(
        <>
            <h3>Add a Movie</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='title' />
                    <Input name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='description' />
                    <Input name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='actors' />
                    <Input name='actors' value={actors} onChange={(e) => setActors(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='rating' />
                    <Input name='rating' value={rating} onChange={(e) => setRating(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='runtime' />
                    <Input name='runtime' value={runtime} onChange={(e) => setRuntime(e.target.value)} />
                </FormGroup>
                <Button type='submit'>Click to Submit</Button>
            </Form>
        </>
    )
}

export default MovieCreate;