import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';

const CheckOut = () => {

    const checkout = useLoaderData();
    const { title, author, others_info} = checkout;

    const notify = () => toast('Successfully checkout your service');

    return (
        <div class="container mt-5 mb-5">
            <h3 className='my-4 blog-text'>Enjoy Your Premium Service</h3>
        <div class="row m-0">
          <div class="col-12 mb-4 blog">
            <div class="card">
              <div class="card-body blog-bg text-start">
                <h1 class="card-title mt-3 blog-text">{title}</h1>
                <p class="card-text fw-semibold">Course Tutor: {author.name}</p>
                <p>{author.university}</p>
                
                <p><span className='blog-text fw-semibold'>Donate cup off tea:</span> ${others_info.check_price}</p>
                <Button onClick={notify} variant='outline-success' className='text-center'>CheckOut</Button>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default CheckOut;