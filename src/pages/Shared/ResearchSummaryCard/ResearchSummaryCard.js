import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import './ResearchSummaryCard.css'

const ResearchSummaryCard = ({research}) => {

    const {_id, title, author, price , details} = research
    return (
        <div>
            <Card className="text-start my-2">
            <Card.Header className='d-flex justify-content-between align-items-center'>
             <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author?.img}
                        style={{ height: '60px' }}
                    ></Image>
                       <div className='text-start'>
                        <p className='mb-0 text-dark-violet'>Course Tutor: {author?.name}</p>
                        <p>{author?.university}</p>
                    </div>
                </div> 
            </Card.Header>
            <Card.Body>

                <Card.Title className='text-success'>{title}</Card.Title>
               
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>
                            {details.slice(0, 300) + '...'} <Link to={`/research/${_id}`} className='see-more fw-bold'>Click Here to Read More or Enroll</Link> 
                            </>
                            :
                            details
                    }
                </Card.Text>

                <p><span className='blog-text fw-semibold'>Donate cup off tea:</span> ${price}</p>
            </Card.Body>
          
            </Card>
        </div>
    );
};

export default ResearchSummaryCard;