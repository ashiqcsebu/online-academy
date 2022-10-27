import React from 'react';
import {Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaDollarSign } from 'react-icons/fa';
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
                            {details.slice(0, 250) + '...'} <Link to={`/research/${_id}`} className='see-more fw-bold'>Read More</Link> 
                            </>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <strong>Course Fee :  </strong>
                    <FaDollarSign className='text-dark-violet me-2'></FaDollarSign>
                    <strong> {price}</strong> 
                </div>
                <div>
                <Button style={{backgroundColor:'#1f5156', color: 'white'}} ><Link to={`/research/${_id}`} className='see-more fw-bold'>Click Here to Enroll</Link> </Button>
            
                </div>
                
            </Card.Footer>
            </Card>
        </div>
    );
};

export default ResearchSummaryCard;