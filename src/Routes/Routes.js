import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Registration/Registration";
import CourseDetails from "../Components/Common/CourseDetails/CourseDetails";
import Course from "../Components/Course/Course";

import Home from "../Components/Home/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter([

    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader : ()=> fetch(`http://localhost:5000/courses`)
                
            },
            {
                path: '/courses/:id',
                element:<Course></Course>,
                loader:({params})=> fetch(`http://localhost:5000//courses/${params}`)
            },
             {
                path: '/courses/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params})=> fetch(`http://localhost:5000/course-categories/${params.id}`)
          
             },

             {
                path:'/login',
                element: <Login></Login>,
               
            },
            {
                path:'/register',
                element: <Register></Register>,
             
            },

        ]
    }
])