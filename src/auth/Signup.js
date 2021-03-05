import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
       
        event.preventDefault();
        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                props.updateToken(data.sessionToken)
            })
    }

    return(
        <React.Fragment>
            <div className='registerform'>
        <h1>Signup</h1>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Input onChange={(e) => setUsername(e.target.value)} name='username' type='email' placeholder='Email' value={username} minLength={'3'} required />
            </FormGroup>
            <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} name='password' type='password' placeholder='Password' value={password} minLength={'5'} required />
            </FormGroup>
            <Button type='submit' className='login-button' style={{color:'black', border:'solid', borderRadius:'10px'}}>Signup</Button>
        </Form>
        </div>
    </React.Fragment>   
    
        // <div>
        //     <h1 style={{ color: 'black'}}>Signup</h1>
        //     <Form className='input-group' onSubmit={handleSubmit}>
        //         <FormGroup>
        //             <Label htmlFor='username' className='input-field' style={{ color: 'black'}}>Username</Label>
        //             <Input onChange={(e) => setUsername(e.target.value)} name='username' value={username} minLength={'3'} required />
        //             <Label htmlFor='password' className='input-field' style={{ color: 'black'}}>Password</Label>
        //             <Input onChange={(e) => setPassword(e.target.value)} name='password' type='password' value={password} minLength={'8'} required />
        //             <Button type='submit' className='submit-btn'>Signup</Button>
        //         </FormGroup>
        //     </Form>
        // </div>
    )
}

export default Signup;