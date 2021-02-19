import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const MovieEdit = (props) => {
    const [editTitle, setEditTitle] = useState(props.movieToUpdate.title);
    const [editDescription, setEditDescription] = useState(props.movieToUpdate.descripton);
    const [editActors, setEditActors] = useState(props.movieToUpdate.actors);
    const [editRating, setEditRating] = useState(props.movieToUpdate.rating);
    const [editRuntime, setEditRuntime] = useState(props.movieToUpdate.runtime);

    const movieUpdate = (event, movie) => {
        event.preventDefault();
        fetch(`http://localhost:3000/movie/${props.movieToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({movie: {title: editTitle, description: editDescription, actors: editActors, rating: editRating, runtime: editRuntime }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then((res) => {
                props.fetchMovies();
                props.updateOff();
            })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit a Movie</ModalHeader>
            <ModalBody>
                <Form onSubmit={movieUpdate}>
                    <FormGroup>
                        <Label htmlFor='title'>Edit Title:</Label>
                        <Input name='title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description'>Edit Description:</Label>
                        <Input name='description' value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='actors'>Edit Actors:</Label>
                        <Input name='actors' value={editActors} onChange={(e) => setEditActors(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='rating'>Edit Rating:</Label>
                        <Input name='rating' value={editRating} onChange={(e) => setEditRating(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='runtime'>Edit Runtime:</Label>
                        <Input name='runtime' value={editRuntime} onChange={(e) => setEditRuntime(e.target.value)} />
                    </FormGroup>
                    <Button type='submit'>Update Movie</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default MovieEdit;