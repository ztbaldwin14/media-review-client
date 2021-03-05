import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then((res) => res.json())
            .then((data) => {
                props.updateToken(data.sessionToken)
            })
    }

    return(
        <React.Fragment>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='username'>Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name='username' placeholder='Email' value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' type='password' placeholder='Password' value={password} />
                </FormGroup>
                <Button type='submit' className='login-button' style={{color:'black', border:'solid', borderRadius:'10px'}}>Login</Button>
            </Form>
        </React.Fragment>  
        // <div>
        //     <h1 style={{ color: 'black'}}>Login</h1>
        //     <Form className='input-group' onSubmit={handleSubmit}>
        //         <FormGroup>
        //             <Label htmlFor='username' className='input-field' style={{ color: 'black'}}>Username</Label>
        //             <Input onChange={(e) => setUsername(e.target.value)} name='username' value={username} />
        //             <Label htmlFor='password' className='input-field' style={{ color: 'black'}}>Password</Label>
        //             <Input onChange={(e) => setPassword(e.target.value)} name='password' type='password' value={password} />
        //             <Button type='submit' className='submit-btn'>Login</Button>
        //         </FormGroup>
        //     </Form>
        // </div>
    )
}

export default Login;