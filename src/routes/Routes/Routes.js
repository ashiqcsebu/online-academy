import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Research from "../../pages/Research/Research/Research";
import Field from "../../pages/Field/Field/Field";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import TermsAndCondition from "../../pages/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserProfile from "../../pages/UserProfile/UserProfile/UserProfile";
import Faq from "../../pages/FAQ/Faq";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import CheckOut from "../../pages/Shared/Checkout/Checkout";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
              path: '/',
              element: <Home></Home>,
      
              loader: () => fetch(`https://b610-lerning-platform-server-side-ashiqcsebu.vercel.app/research`)
            },
            {
                path: '/field/:id',
                 element:<PrivateRoute><Field></Field></PrivateRoute>,
                 loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-ashiqcsebu.vercel.app/field/${params.id}`)
            },
            {
                path: '/research/:id',
                element: <Research></Research>,
                 loader: ({params}) =>fetch(`https://b610-lerning-platform-server-side-ashiqcsebu.vercel.app/research/${params.id}`)
            },

            {
                path: '/checkout/:id',
                element: <PrivateRoute> <CheckOut></CheckOut> </PrivateRoute>,
                loader: ({params}) =>fetch(`https://b610-lerning-platform-server-side-ashiqcsebu.vercel.app/checkout/${params.id}`)
             
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '*',
                element:<Home></Home>
            }

        ]
    }

])