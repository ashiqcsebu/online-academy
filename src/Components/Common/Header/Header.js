import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideBar from '../LeftSideBar/LeftSideBar';


const Header = () => {
  
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/"> The New York Times</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/">All News</Nav.Link>
                        <Nav.Link href="/">Breaking News</Nav.Link> */}
                       
                    </Nav>

                    <Nav>
                    <Nav.Link href="/">All News</Nav.Link>
                        <Nav.Link href="/">Breaking News</Nav.Link>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="info" onClick={handleLogOut}>Log out</Button>
                                        
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }


                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                             <Image
                                     style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>

                                </Image>
                           
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                   
                    <div className='d-lg-none'>
                        <LeftSideBar></LeftSideBar>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;