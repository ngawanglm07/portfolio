import React from 'react'
import UncontrolledExample from './slides'
import Skill from './Skills'
import {Row , Col, Container ,} from 'react-bootstrap';
function Topp() {
  return (
    <Container>  
    <Row>
  <Col md={7} className='d-flex flex-direction-column' >
   <UncontrolledExample/>
  </Col>
   <Col md={5}  className="home__bg">
   <Skill />
   </Col>
   </Row>
   </Container>
 
  )
}

export default Topp
