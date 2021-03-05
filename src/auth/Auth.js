
import React, { useState } from 'react';
import {Container} from 'reactstrap';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import {useSpring, animated} from 'react-spring';

const Auth = (props) => {
    const [registrationFormStatus, setRegistrationFormStatus] = useState(false)
    const loginProps = useSpring({
        left: registrationFormStatus ? -430 : 0,
        opacity: registrationFormStatus ? 0 : 1
    })
    const registerProps = useSpring({
        left: registrationFormStatus ? 0 : 430,
        opacity: registrationFormStatus ? 1 : 0
    })

    function registerClicked() {setRegistrationFormStatus(true)}
    function loginClicked() {setRegistrationFormStatus(false)}

    return(
        <Container>
            <div className='login-register-wrapper'>
                <div className='button-box'>
                    <button onClick={loginClicked} id='loginBtn' className='toggle-button'>Login</button>
                    <button onClick={registerClicked} id='registerBtn' className='toggle-button'>Signup</button>
                </div>
                <div className='form-group'>
                    <animated.div id='loginform' style={loginProps}> <Login className='loginform' updateToken={props.updateToken} /></animated.div>
                    <animated.div id='registerform' style={registerProps}><Signup className='registerform' updateToken={props.updateToken} /></animated.div>
                </div>
            </div>
        </Container>
    );
};

export default Auth;
