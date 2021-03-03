import React, { useState } from 'react';
import { Container} from 'reactstrap';
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
    function loginClicked() { setRegistrationFormStatus(false)}

    return(
        <Container>
            <div className='login-register-wrapper'>
                <div className='nav-buttons'>
                    <button onClick={loginClicked} id='loginBtn' className='active'>Login</button>
                    <button onClick={registerClicked} id='registerBtn' className='active'>Signup</button>
                </div>
                <div className='form-group'>
                    <animated.form action='' id='loginform' style={loginProps}><Login className='loginform' updateToken={props.updateToken} /></animated.form>
                    <animated.form action='' id='registerform' style={registerProps}><Signup className='registerform' updateToken={props.updateToken} /></animated.form>
                </div>
            </div>
        </Container>
        // <Container className='auth-container'>
        //     <Row>
        //         <Col md='6'>
        //             <Signup updateToken={props.updateToken} />
        //         </Col>
        //         <Col md='6' className='login-col'>
        //             <Login updateToken={props.updateToken} />
        //         </Col>
        //     </Row>
        // </Container>
    );
};

export default Auth;
        // <Container  className='auth-container'>
        //     <div className='hero'>
        //         <div className='form-box'>
        //             <div className='button-box'>
        //                 <div id='btn'></div>
        //                 <button type="button" className='toggle-btn'>Login</button>
        //                 <button type="button" className='toggle-btn'>Signup</button>
        //             </div>
        //             <div className='social-icons'>
        //                 <img src='https://elements.envato.com/free/icons/social-media/Facebook.svg'></img>
        //                 <img src='https://elements.envato.com/free/icons/social-media/Github.svg'></img>
        //                 <img src='https://elements.envato.com/free/icons/social-media/LinkedIn.svg'></img>
        //             </div>
        //             <form  className='loginSignup-group'>
        //                 <div className='login'>
        //                 <Login updateToken={props.updateToken} />
        //                 </div>
        //                 <div className='signup'>
        //                 <Signup updateToken={props.updateToken} />
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
            {/* <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Signup updateToken={props.updateToken} />
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }} className='login-col'>
                    <Login updateToken={props.updateToken} />
                </Col>
            </Row>*/}
        // </Container> 
