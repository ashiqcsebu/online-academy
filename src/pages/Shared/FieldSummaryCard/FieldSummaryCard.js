import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import './FieldSummaryCard.css'

const FieldSummaryCard = () => {

    const [fields, setFields] = useState([]);

    useEffect(() => {
      
        fetch(`https://b610-lerning-platform-server-side-ashiqcsebu.vercel.app/research-field`)
        .then (res => res.json())
        .then (data => setFields(data))
    }, [])

    return (


      
       <div className="mb-3 w-100 text-start">
                <div className='row g-0'>
                {
                    fields.map(field =>
                    <div className='card col-md-5 mx-2 my-2'>
                    <div className="card-body text-center bg-card">
                    <div key={field.id}>
                        <Link to={`/field/${field.id}`}>
                            <Image src={field.image} className="w-100 border rounded-2"   style={{ height: '150px' }}></Image>
                            <p className='my-2 fw-bold'>{field.name}</p>
                            <h5>Current Student: {field.reads} </h5>
                        </Link>
                        <Button style={{backgroundColor:'#20e1c7', color: 'white'}} ><Link to={`/field/${field.id}`}>Read Now</Link></Button>
                    </div>
                    </div>
                    </div>
                    )
                }
                </div>
        </div>
    );
};

export default FieldSummaryCard;