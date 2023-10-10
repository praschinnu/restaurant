import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Operating from '../Components/Operating'
import Reviews from '../Components/Reviews'




function View() {

  const [allrestaurants, setRestaurants] = useState([])


  const getAllRest=async()=>{
    const result=await axios.get('/restaurants.json')
    setRestaurants(result.data.restaurants);
  }

  const param=useParams()

    //var id=param.id 

    const {id}=param   //destructuring 

 

  useEffect(()=>{
    getAllRest()

  },[])

  const singleRest=allrestaurants.find(i=>i.id==id)
  console.log(singleRest);

  return (
    <div>
      {
        singleRest ?
          <Row>

            <Col lg={6} sm={12} xs={12} md={6} className='py-5 ps-5  ms-5 mt-5 mb-5'>
              <img style={{ height: '550px', width: '60%' }} 
               src={singleRest.photograph} alt="" />
            </Col>

            <Col className='text-start w-100'>
              <h1 className='text center text-black'>{singleRest.name} </h1>

              <ListGroup className='me-5 pe-5'>
                <ListGroup.Item className='mt-3'><b className='text-info'>Address:</b>                {singleRest.address}</ListGroup.Item>
                <ListGroup.Item className='mt-3'> <b className='text-info'>Cuisine Type:</b>          {singleRest.cuisine_type}</ListGroup.Item>
                <ListGroup.Item className='mt-3'> <b className='text-info'>Neighborhood:</b>          {singleRest.neighborhood} </ListGroup.Item>
                <ListGroup.Item className='mt-3'> <Operating operatingData={singleRest.operating_hours}></Operating> </ListGroup.Item>
                <ListGroup.Item className='mt-3'> <Reviews reviews={singleRest.reviews}></Reviews> </ListGroup.Item>
              </ListGroup>
            </Col>


          </Row>

          :
          <Row>
            <h4>no data found</h4>
          </Row>
      }
    </div>
  )
}

export default View