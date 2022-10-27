import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './LeftSideNav.css';

const LeftSideNav = () => {

    const [fields, setFields] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/research-field`)
        // fetch(`https://learning-platform-server-side.vercel.app/research-field`)
        .then (res => res.json())
        .then (data => setFields(data))
    }, [])

    return (
    <div className="wrapper">
        <nav id="sidebar">
            <div className="sidebar-header text-center d-flex">
                <h4 className='mx-2'> Available Courses</h4>
            </div>
            <ul className="list-unstyled components">
                <li>
                {
                    fields.map(field => <p key={field.id}>
                        {/* <Link to={`/field/${field.id}`}>{field.name}</Link> */}
                            <Link to={`/field/${field.id}`}>{field.name}</Link>
                    </p>
                    )
                }
                </li>
            </ul>

          
        </nav>
    </div>
    );
};

export default LeftSideNav;