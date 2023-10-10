import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Reviews({reviews}) {
  return (
    <div>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='text-white '><b className='text-info'>Reviews</b></Accordion.Header>
        <Accordion.Body>
         {
          reviews?reviews.map(i=>(
            
            <div className='border'>
              <p><b className='text-info'>name: </b>{i.name}</p>
              <p><b className='text-info'>date: </b>{i.date}</p>
              <p><b className='text-info'>rating:</b> {i.rating}</p>
              <p><b className='text-info'>comments:</b> {i.comments}</p>
              <hr />
            </div>

          )
          ):<h1>no reviews</h1>
         }
        </Accordion.Body>
      </Accordion.Item>
      
      
    </Accordion>
    </div>
  )
}

export default Reviews