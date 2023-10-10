import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Home() {
    const [restaurant,setRestaurants]=useState([])

    const getAllRestaurant=async()=>{

        const result=await axios.get('/restaurants.json')
        setRestaurants(result.data.restaurants);

    }

    useEffect(()=>{
       getAllRestaurant()
    },[])

    console.log(restaurant);

  return (


<div>
    <Row>
        <Col xs={12} sm={6} className=' ms-5 mt-5'>
            
           <Container>
                <h1><b className='text-dark'>Yummy In The Tummy</b></h1>
             <p className='ms-3 mt-3 test-start w-75 text-info'>People love stories, and using storytelling to convey the history or inspiration behind your dishes can help create a deeper connection with your customers.
    
    By sharing the story behind a particular dish or ingredient, you can make it more meaningful and memorable.
    
    For example, you could share the story behind a family recipe that has been passed down for generations, or the inspiration behind a new dish that was created by one of your chefs.
    
    You could also highlight the history of a particular ingredient or dish and how it fits into your restaurant's overall theme or concept.</p>
           </Container>

</Col>
        <Col className=' mt-4 text-center'>
            <img className='w-75' style={{height:'300px'}}
             src="
             https://i.postimg.cc/V6LQf9LM/vecteezy-bibimbap-png-graphic-clipart-design-20001949-938.png"  alt="" />
        </Col>

    </Row>
    <hr />


    <Container>
            <Row>{
                restaurant.length>0?restaurant.map(i=>
        <Col xs={12} sm={6} lg={4} md={6}>

                <Link to={`/view/${i.id}`} style={{textDecoration:'none'}}>
                    <Card style={{ width: '18rem',height:'500px' }} className='m-4'> 
                    <Card.Img 
                    style={{height:'400px'}} 
                    variant="top" src={i.photograph} />
                    <Card.Body>
                      <Card.Title className='text-center text-info'>{i.name}</Card.Title>
                      <Card.Text>
                       <h5><b className='text-primary'>Address:</b>{i.address}</h5>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
            
        </Col> 
        ):<h1>no data present</h1> }
        </Row>
        
    </Container>  
    
</div>)
}

export default Home