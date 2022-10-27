
import React, { useContext, useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import logo from '../../../assets/Logo/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import RightSideNav from '../LeftSideNav/LeftSideNav';
import './Header.css';

const Header = () => {

    const [theme, setTheme] = useState('light');
    const { user, logOut } = useContext(AuthContext);

    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
      useEffect(() => {
        document.body.className = theme;
      }, [theme]);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar expand="lg" className='mb-4 navbar'>
            <Container fluid>
                <Navbar.Brand className='text-start fw-bold brandtext d-flex align-items-start justify-content-center'>
                     <Image className='logo' src={logo}></Image> 
                    <Link to='./' className='mx-2 my-2'>
                    <div>Edu Hive</div>
                    <div>Academy</div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-5 me-auto my-2 my-lg-0 fw-semibold"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                     <Link to='/courses' className='brandtext navlink mx-3 px-2 py-2'>Courses</Link>
                     <Link to='/faq' className='brandtext navlink mx-2 px-2 py-2 '>FAQ</Link> 
                    <Link to='/blog' className='brandtext navlink mx-3 px-2 py-2'>Blog</Link>
                   
                    <div className={`Header ${theme} bg-light border rounded-2`}>
                      <Button onClick={toggleTheme} className='btn btn-light border border-2'>Theme</Button>
                    </div>
                </Nav>
                <Nav>
                <>
                    {
                    user?.uid ?
                    <>  
                        <Link to='/profile' className='mx-4 fw-semibold'>
                            {user?.displayName}
                            <Image className='mx-2 rounded-circle profile-img' src={user?.photoURL}></Image>
                        </Link>
                        <Button className='mx-2 py-0 my-0 bg-dark-blue'  variant="light" onClick={handleLogOut}>Log out</Button>
                    </>:
                    <>
                    <button className='mx-2 my-2 bg-dark-violet'><Link to='/login'>Login</Link></button>
                    <button className='mx-2 my-2 bg-dark-violet'><Link to='/register'>Sign Up</Link></button>
                    </>
                    }

                </>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className='d-lg-none'>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default Header;





















// function Header() {
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);
  
//     const { user, logOut } = useContext(AuthContext);
  
//          const handleLogOut = () => {
//             logOut()
//                 .then(() => { })
//                  .catch(error => console.error(error))
//         }
  
//     return (
//       <>

     
//         <nav className="navbar" >
//           <div className="nav-container" style={{backgroundColor:"#308991 "}}>
//             <NavLink exact to="/" className="nav-logo">
//               Edu Hub
//               <i className="fas fa-code"></i>
//             </NavLink>
  
//             <ul className={click ? "nav-menu active" : "nav-menu"}>
              
           
//               <li className="nav-item">
//                 <NavLink
//                   exact
//                   to="/courses"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={handleClick}
//                 >
//                   Courses
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   exact
//                   to="/blog"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={handleClick}
//                 >
//                   Blog
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   exact
//                   to="/faq"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={handleClick}
//                 >
//                   FAQ
//                 </NavLink>
//               </li>
             
  
//               <li className="nav-item">
              
//                   {
//                     user?.uid ?
//                         <>
//                     <span>  
//                         <Image
//                                 style={{ height: '30px' }}
//                                 roundedCircle
//                                 src={user?.photoURL}> 
//                         </Image> 
//                     </span>
//                  <NavLink
//                   exact
//                   to="/"
//                   activeClassName="active"
//                   className="nav-links"   
//                   onClick={handleLogOut}
//                 >
//                   Log Out
//                 </NavLink>           
//                 </>
//                   :
//                   <li >
//                                <NavLink
//                                 exact
//                                 to="/login"
//                                 activeClassName="active"
//                                 className="nav-links"
                            
//                                  onClick={handleClick}>
//                                 Login
//                                 </NavLink>

//                                 <NavLink 
//                                 exact
//                                 to="/register"
//                                 activeClassName="active"
//                                 className="nav-links"
//                                  onClick={handleClick}>
//                                Register
//                                 </NavLink>
                                
//                               </li>
//                       }
               
//               </li>
         
//             </ul>
//             <div className="nav-icon" onClick={handleClick}>
//               <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   }
  
//   export default Header;