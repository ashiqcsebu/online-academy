import React from 'react';
 import { CDBBox, CDBFooter, CDBFooterLink} from 'cdbreact';
 import {FaFacebook} from 'react-icons/fa';
 import {FaTwitter} from 'react-icons/fa';
 import {FaInstagram} from 'react-icons/fa';
 import  logo  from '../../../assets/Logo/logo.png';
 import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
 
    <CDBFooter className="shadow text-color text-success mt-4 footer-bg">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <span to="/" className="p-0 text-dark">
              <img alt="logo" src={logo} width="60px" />
            </span>
            <p className="my-2" style={{ width: '350px', color:'white' }}>
              We are Offering The Best Sevice to Aid Our Student
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '900', color:'white' }}>
              Edu Hive
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink to="/" style={{ fontWeight: '600', color:'white' }}>Resources</CDBFooterLink>
              <CDBFooterLink to="/" style={{ fontWeight: '600', color:'white' }}>About Us</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '900', color:'white' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
          
          
              <Link to='/faq' style={{ fontWeight: '600', color:'white' }}>Frequently Asked Question</Link>
              <Link to='/blog' style={{ fontWeight: '600', color:'white' }}>Blog</Link>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '900', color:'white' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink to="/" style={{ fontWeight: '600', color:'white' }}>Android Application</CDBFooterLink>
              <CDBFooterLink to="/" style={{ fontWeight: '600', color:'white' }}>Web Application</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <div style={{ width: '100%' , color:'white'}} className="flex mx-auto mt-2 text-center justify-content-center">
            <FaFacebook className='mx-2'></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaInstagram className='mx-2'></FaInstagram>
        </div>
        <small className="text-center mt-5" style={{ fontWeight: '600', color:'white' }}>&copy; Edu Hive Academy, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );

};

export default Footer;