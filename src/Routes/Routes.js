import { createBrowserRouter } from "react-router-dom";
import Course from "../Components/Course/Course";
import CourseInfo from "../Components/CourseInfo/CourseInfo";
import Home from "../Components/Home/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter([

    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/courses/:id',
                element:<Course></Course>
            },
            {
                path: '/course-info/:id',
                element:<CourseInfo></CourseInfo>
            },
        ]
    }
])