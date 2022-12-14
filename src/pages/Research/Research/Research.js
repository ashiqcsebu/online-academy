import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import Pdf from 'react-to-pdf';
import {FaFileDownload} from 'react-icons/fa';

const Research = () => {

  

    const ref = React.createRef();

    const research = useLoaderData();
    const {_id, title, details, image_url } = research;
    console.log(image_url);
    return (
      <>  


       <div className="card mb-2 w-100 text-start">
          <div className="row g-0">
            <div className='text-center my-4'>                    
              <Pdf targetRef={ref} filename="course-details.pdf">
                        {({ toPdf }) => 
                        <Button onClick={toPdf}
                        className='bg-dark-violet'>
                          <FaFileDownload className='mx-2'></FaFileDownload>
                          Download This Info
                        </Button>}
              </Pdf>
            </div>
            <hr />
            <div className="col-md-12">
              <div className="card-body">
                <div ref={ref} style={{ justifyContent:'center', alignItems:'center'}}>
              
                <Image src={image_url} className="w-100"   style={{ height: '250px' }}></Image>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{details}</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div>
   
    
             <Button><Link to={`/checkout/${_id}`} variant='outline-success' className='text-center'> Click Here to Enroll </Link> </Button>
        </div>
       
        </> 

    );
};

export default Research;