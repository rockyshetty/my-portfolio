
import React, {useState, useEffect} from 'react'
import '*' as reactbootsrap from 'react-bootstrap';
import {Slidder} from './Slidder';
function MainPage() {

  const LeftSide =()=> {
    return <reactbootsrap.ListGroup>
    <reactbootsrap.ListGroup.Item>
    <span>Rakesh H M</span>
    <span>Full Stack Developer</span>
    </reactbootsrap.ListGroup.Item>
    <reactbootsrap.ListGroup.Item>About</reactbootsrap.ListGroup.Item>
    <reactbootsrap.ListGroup.Item>Experience</reactbootsrap.ListGroup.Item>
    <reactbootsrap.ListGroup.Item>Projects</reactbootsrap.ListGroup.Item>
    <reactbootsrap.ListGroup.Item>Achivements</reactbootsrap.ListGroup.Item>
    <reactbootsrap.ListGroup.Item>Education</reactbootsrap.ListGroup.Item>
    <reactbootsrap.ListGroup.Item>Contact</reactbootsrap.ListGroup.Item>
    <reactbootsrap.ListGroup.Item>Resume</reactbootsrap.ListGroup.Item>
    </reactbootsrap.ListGroup>
  }
  const ProfileImage =()=>{
    return <img src=''/>
  }
  const About =()=>{

  }
  const Experience =()=>{

  }
  const Projects =()=>{

  }
  const Achivements =()=>{

  }
  const Education =()=>{

  }
  const Contact =()=>{

  }
  const Resume =()=>{

  }
  const RightSide =()=> {
    return <>
    <reactbootsrap.Row>{ProfileImage()}</reactbootsrap.Row>
    <reactbootsrap.Row>{About()}</reactbootsrap.Row>
    <reactbootsrap.Row>{Experience()}</reactbootsrap.Row>
    <reactbootsrap.Row>{Projects()}</reactbootsrap.Row>
    <reactbootsrap.Row>{Achivements()}</reactbootsrap.Row>
    <reactbootsrap.Row>{Education()}</reactbootsrap.Row>
    <reactbootsrap.Row>{Contact()}</reactbootsrap.Row>
    <reactbootsrap.Row>{Resume()}</reactbootsrap.Row>
    </>
  }

  return <reactbootsrap.Container>
  <reactbootsrap.Row className='p-0 m-0'>
  <reactbootsrap.Col className="col-md-4">
  {LeftSide()}
  </reactbootsrap.Col>
  <reactbootsrap.Col className="col-md-8">
  {RightSide()}
  </reactbootsrap.Col>
  </reactbootsrap.Row>
  </reactbootsrap.Container>
}
export default MainPage;
