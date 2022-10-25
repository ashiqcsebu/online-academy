import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook,  FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import app from '../../../firebase/firebase.config';


const auth = getAuth(app);

const Login = () => {

    const [error, setError] = useState('')

     const {signIn , providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate('/')
        })
        .catch(error =>{
            console.error(error);
            setError(error.message);
        } )
    }


    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn =()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error)
        })

    }

    const facebookProvider = new FacebookAuthProvider();
    const handleFacebookSignIn =()=>{
        signInWithPopup(auth,facebookProvider)
        .then(result =>{
          const user = result.user;
          console.log(user);
          setError(user);
        })
      }
    

    return (
      <div className='border-10px-solid red'>  

        <Form onSubmit={handleSubmit} className="col-lg-6" >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            
            <Button variant="primary" type="submit" >
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>

        <div>
        <ButtonGroup >
           
                <Button variant="light" onClick={handleGoogleSignIn} > <FaGoogle></FaGoogle> </Button>
                <Button variant="light"  onClick={handleFacebookSignIn} ><FaFacebook></FaFacebook> </Button>
            </ButtonGroup>
        </div>

      </div>
  
 
    );
};

export default Login;