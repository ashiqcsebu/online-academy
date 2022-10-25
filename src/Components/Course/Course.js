import React from 'react';

import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../Common/CourseDetails/CourseDetails';


const Course = () => {
    const categoryCourse = useLoaderData();
    return (
        <div>
         <p>category {categoryCourse.length}</p> 

        {
            categoryCourse.map(course => <CourseDetails
            key ={course._id}
            course= {course}
            >

            </CourseDetails>
            )
        }
    </div>
    );
};

export default Course;