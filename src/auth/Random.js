import React, { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Random = (props) => {
  const [title, setTitle] = useState('');
  const [runtime, setRuntime] = useState();
  const [description, setDescription] = useState('');
  const [actors, setActors] = useState('');
  const [rating, setRating] = useState();

    const handleRetrieval = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/movies/', {
      method: 'GET',
      body: JSON.stringify({movie: { title: title,runtime: runtime,description: description,actors: actors, rating: rating}}),
     headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization' : props.token
      })
    }).then((res) => res.json())
        .then((data) => {
           console.log(data);
           setTitle('');
           setRuntime();
           setDescription('');
           setActors('');
           setRating();
        });

     return (
      <div>
        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
          <Toast>
            <ToastHeader>
              {props.title}
            </ToastHeader>
            <ToastBody>
              <p>{props.actors}</p>
              <p>{props.description}</p>
              <p>{props.runtime}</p>
              <p>{props.rating}</p>
            </ToastBody>
          </Toast>
        </div>
      </div>
  );
     };
};

export default Random;