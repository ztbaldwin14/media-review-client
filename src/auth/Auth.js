import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from '../auth/Signup';
import Login from '../auth/Login';


const Auth = (props) => {
    return(
        <Container className='auth-container'>
            <Row>
                <Col md='6'>
                    <Signup updateToken={props.updateToken} />
                </Col>
                <Col md='6' className='login-col'>
                    <Login updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
    );
};

export default Auth;