import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
    return (
      <Accordion className='my-4'>
      <h3 className='faq-h3'>Frequently Asked Questions</h3>
      <Accordion.Item className='my-4' eventKey="0">
        <Accordion.Header>What is CORS?</Accordion.Header>
        <Accordion.Body className='faq'>
        <strong> Cross-Origin Resource Sharing (CORS) </strong>   is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='my-4' eventKey="1">
        <Accordion.Header>Why do you use Firebase? What would be the Alternative of Firebase?</Accordion.Header>
        <Accordion.Body className='faq'>
        Firebase's easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts (more options can be found here).Unlimited Reporting. It allows for reporting of 500 distinct events. Audience Segmentation. We can identify custom audiences in the Firebase console based on device data, custom events, or user properties.Integration with Other Services.Cloud Messaging.Authentication.Test Lab.Hosting.Remote Configuration.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='my-4' eventKey="2">
        <Accordion.Header>How Does Private Router Work?</Accordion.Header>
        <Accordion.Body className='faq'>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
          Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='my-4' eventKey="3">
        <Accordion.Header>What is Node? How Does It Work?</Accordion.Header>
        <Accordion.Body className='faq'> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

        <br />
       <strong> Working of Node.js:</strong>  Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
<br />
       <strong> Node.js basically works on two concept :</strong> 
      <li>Asynchronous</li> Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. 
       <li>Non-blocking I/O </li> Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. 
       <br />
      Nodejs use event-driven-architecture.
    <li> Events are emitted.</li>
    <li> Event loop picks them up.</li>
    <li>Callbacks are called. </li>. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );



};

export default Blog;














