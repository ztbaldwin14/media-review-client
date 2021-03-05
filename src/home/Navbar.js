import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import Reviews from '../movies/Reviews';

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return(
        <Navbar tag="h1" color='faded' light expand='md' style={{backgroundColor:'rgba(95,95,95,0.3)', backgroundO:'25%'}}>
            <NavbarBrand tag="h4" style={{ paddingTop:'60px', color: 'black', fontSize:'72pt',width: '100%', textAlign:'center', paddingLeft:'200px', WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'white'}} href='/'>Reel Reviews</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav>
                    <NavItem>
                        <Button onClick={() => props.setShowReviews(!props.showReviews)} style={{border:'solid', width:'110px', height:'40px', color:'black',background: 'linear-gradient(to top, #FF9506, #EC4E20)', borderRadius:'10px', WebkitTextStrokeWidth:'.5px',WebkitTextStrokeColor:'white'}}>Reviews</Button>
                    </NavItem>
                    <NavItem>
                        <Button  variant="dark" style={{border:'solid', width:'110px', color:'black',background: 'linear-gradient(to top, #FF9506, #EC4E20)', height:'40px', borderRadius:'10px', WebkitTextStrokeWidth:'.5px',WebkitTextStrokeColor:'white'}} onClick={props.clearToken}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;