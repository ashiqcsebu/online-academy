import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import LeftSideBar from '../Components/Common/LeftSideBar/LeftSideBar';

const Main = () => {
    return (
        <div>
             <Header></Header> 
          <Container>
            <Row>
                <Col lg="3" className="d-none d-lg-block">
                     <LeftSideBar></LeftSideBar>
                </Col>

                <Col lg="9">
                       <Outlet></Outlet>
                </Col>

               

            </Row>
          </Container>
           <Footer></Footer> 
        </div>
    );
};

export default Main;