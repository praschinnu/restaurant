import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Operating({ operatingData }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <Button variant="info" className='w-100 p-2' onClick={handleShow}>
        <b className='fs-5 text-info primary'>Operating Hours</b>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title ><b >Operating Hours</b></Modal.Title>
        </Modal.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Monday-{operatingData.Monday}</ListGroup.Item>
          <ListGroup.Item>Tuesday-{operatingData.Tuesday}</ListGroup.Item>
          <ListGroup.Item>Wednesday-{operatingData.Wednesday}</ListGroup.Item>
          <ListGroup.Item>Thursday-{operatingData.Thursday}</ListGroup.Item>
          <ListGroup.Item>Friday-{operatingData.Friday}</ListGroup.Item>
          <ListGroup.Item>Saturday-{operatingData.Saturday}</ListGroup.Item>
          <ListGroup.Item>Sunday-{operatingData.Sunday}</ListGroup.Item>
        </ListGroup>




        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Operating