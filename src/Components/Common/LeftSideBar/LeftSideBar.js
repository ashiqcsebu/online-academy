import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    const [courses , setCourses] = useState([]);

     useEffect(()=> {
        fetch('http://localhost:5000/courses')
        .then( res => res.json())
        .then( data=> setCourses(data));
     }, [])

    return (
        <div>
         <h1>Your Courses</h1>   
         {
            courses.map(course => <p key={course.id}>
                <Link to={`/courses/${course.id}`}> {course.name} </Link>

            </p>)
         }
        </div>
    );
};

export default LeftSideBar;