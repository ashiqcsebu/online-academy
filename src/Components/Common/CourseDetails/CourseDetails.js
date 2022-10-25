import React from 'react';


const CourseDetails = ({course}) => {

    const { _id, title, author, details, image_url, rating, total_view } = course;
     console.log(title);
    return (
        <h1>hi</h1>
    //     <Card className="mb-5">
    //     <Card.Header className='d-flex justify-content-between align-items-center'>
    //         <div className='d-flex'>
    //             <Image
    //                 roundedCircle
    //                 className='me-2'
    //                 src={author?.img}
    //                 style={{ height: '60px' }}
    //             ></Image>
    //             <div>
    //                 <p className='mb-0'>{author?.name}</p>
    //                 <p>{author?.published_date}</p>
    //             </div>
    //         </div>
    //         <div>
               
    //         </div>
    //     </Card.Header>
    //     <Card.Body>
    //         <Card.Title>{title}</Card.Title>
    //         <Card.Img variant="top" src={image_url} />
    //         <Card.Text>
               
    //         </Card.Text>
    //     </Card.Body>
    //     <Card.Footer className="d-flex justify-content-between">
    //         <div>
             
    //             <span>{rating?.number}</span>
    //         </div>
    //         <div>
              
    //             <span>{total_view}</span>
    //         </div>
    //     </Card.Footer>
    // </Card>
    );
};

export default CourseDetails;