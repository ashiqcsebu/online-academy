// // import React, { useContext } from 'react';
// // import { Button, Image } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import LeftSideBar from '../LeftSideBar/LeftSideBar';
// // import { FaUser } from 'react-icons/fa';
// // import { Link } from 'react-router-dom';
// // import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


// const Header = () => {
  
//     // const { user, logOut } = useContext(AuthContext);

//     // const handleLogOut = () => {
//     //     logOut()
//     //         .then(() => { })
//     //         .catch(error => console.error(error))
//     // }

//     return (
//         <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
//             <Container>
//                 <Navbar.Brand href="/"> Study Circle </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link href="/">All News</Nav.Link>
//                         <Nav.Link href="/">Breaking News</Nav.Link>
                       
//                     </Nav>

//                     <Nav>
//                         <Nav.Link href="#deets">
//                             {/* {
//                                 user?.uid ?
//                                     <>
//                                         <span>{user?.displayName}</span>
//                                         <Button variant="info" onClick={handleLogOut}>Log out</Button>
                                        
//                                     </>
//                                     :
//                                     <>
//                                         <Link to='/login'>Login</Link>
//                                         <Link to='/register'>Register</Link>
//                                     </>
//                             } */}


//                         </Nav.Link>
//                         <Nav.Link eventKey={2} href="#memes">
//                             {/* {user?.photoURL ?
//                              <Image
//                                      style={{ height: '30px' }}
//                                     roundedCircle
//                                     src={user?.photoURL}>

//                                 </Image>
                           
//                                 : <FaUser></FaUser>
//                             } */}
//                         </Nav.Link>
//                     </Nav>
                   
//                     <div className='d-lg-none'>
//                        <LeftSideBar></LeftSideBar>
//                     </div>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default Header;



import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let activeStyle = {
    backgroundColor: '#01BAEF' ,
    color: "white",
    padding: '5px',
    borderRadius: '5px'
  };
  return (
    <div className="header">
      <div>
        <h2 className="text-2xl font-semibold "> <strong>Study Hub </strong> </h2>
      </div>
      <nav>
        <NavLink
          to="/home"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/stats"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Statistics
        </NavLink>
        <NavLink
          to="/blog"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Blog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
