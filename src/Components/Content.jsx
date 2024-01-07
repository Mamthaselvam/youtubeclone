import React from 'react'
import {Card, Row,Col,Button, } from 'react-bootstrap'
import '../Components/Content.css'
import {maincontent} from '../Data/data.jsx'


const Content = () => {
  return (
    <section className='top'>
    <div className='space'>
      <Button className='box' type="button">All</Button> 
      <Button className='box'type="submit">Mixes</Button>
      <Button  className='box' type="submit">Music</Button>
      <Button  className='box' type="submit">React</Button>
      <Button  className='box' type="submit">Love</Button>
      <Button  className='box' type="submit">Disney</Button>
      <Button  className='box' type="submit">BiggBoss</Button>
      <Button  className='box' type="submit">Cricket</Button>
      <Button  className='box' type="submit">Amazon</Button>
      <Button  className='box' type="submit">Live</Button>
      <Button  className='box' type="submit">Vijay</Button>
      <Button  className='box' type="submit">Paint</Button>
      <Button  className='box' type="submit">ASMR</Button>
      <Button  className='box' type="submit">Movies</Button>
    </div>
     <Row className='row'>
      {maincontent.map((item)=>{
       return(
         <Col xl={3} key={item.id} >
          <div className='boxes'>
            <Card>
              <Card.Img  className='photo' src={item.imgsrc}/>
              <Card.Title className='words'>{item.title}</Card.Title>
              <Card.Text className='wordings'>{item.channelName}</Card.Text>
              <Card.Text className='wordings'>{item.views}.{item.times}</Card.Text>
              
            </Card>   
          </div>  
         </Col>

       )
      }
      
      
      )}
     </Row>
   
    
    
    


    </section>
  )
}

export default Content