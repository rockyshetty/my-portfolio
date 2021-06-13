
import React, {useState, useEffect} from 'react';
import * as reactbootstrap from 'react-bootstrap';
import './MainFile.css';
import {Slidder} from './Slidder';
function MainFile() {
  const ListItemStyle = {
           'border':'0px',
           'paddingLeft':'4rem',
           'fontSize': '1.2rem',
     };
  const ProfileImage =()=>{
    return <img className="col-md-12 m-0 p-0" style={{width:"100%"}}src='https://drive.google.com/uc?export=view&id=14VpzV8rGQUq_ndhwmmF8TYSE6flWbt_L'/>

  }
  const About =()=>{
    return <reactbootstrap.FormLabel className="customFont about p-4">
                           A Full Stack Developer with 2 years of experience in React Js, Laravel, PostgreSQL, Javascript, Php.
           </reactbootstrap.FormLabel>
  }
  const Projects =()=>{
    return <div className="customFont p-4">
           <div className="mt-3">
                <reactbootstrap.FormLabel className="col-md-12 text-left font-weight-bold projectHeader">Digital Quality Management Tool for Belgium industry</reactbootstrap.FormLabel>
                <reactbootstrap.FormLabel className="col-md-12 text-left ml-4 font-weight-bold projectHeader">Full Stack developer <span className="col-md-4 float-right">August 2019 - January 2021 </span></reactbootstrap.FormLabel>
                <reactbootstrap.ListGroup className="col-md-12 pl-2">
                  <reactbootstrap.ListGroup.Item   style={ListItemStyle}>Design and Develop interactive UI's as per client requirement using React js, Javascript, ReactBootsrap, HTML, CSS.</reactbootstrap.ListGroup.Item>
                  <reactbootstrap.ListGroup.Item   style={ListItemStyle}>Developing Business logic and commuincation with database in the backend using Php, Laravel, PostgreSQL</reactbootstrap.ListGroup.Item>
                  <reactbootstrap.ListGroup.Item  style={ListItemStyle}>Followed Agile model in development.</reactbootstrap.ListGroup.Item>
                  <reactbootstrap.ListGroup.Item   style={ListItemStyle}>Handled reactjs packages and Creating REST API's</reactbootstrap.ListGroup.Item>
                  <reactbootstrap.ListGroup.Item   style={ListItemStyle}>Follow Modular way in development and Object Oriented programing</reactbootstrap.ListGroup.Item>
                  <reactbootstrap.ListGroup.Item   style={ListItemStyle}>Femeliar with Fuctional & class components and  Hooks</reactbootstrap.ListGroup.Item>
                  <reactbootstrap.ListGroup.Item   style={ListItemStyle}>Worked under pressure and gave good scalable solutions for the issues.</reactbootstrap.ListGroup.Item>
                  <reactbootstrap.ListGroup.Item   style={ListItemStyle}>Participated in Design, development, deployment meetings</reactbootstrap.ListGroup.Item>
                </reactbootstrap.ListGroup>
           </div>
           <div className="mt-3">
                 <reactbootstrap.FormLabel className="col-md-12 text-left font-weight-bold projectHeader">Middleware for Ecommerce site.</reactbootstrap.FormLabel>
                 <reactbootstrap.FormLabel className="col-md-12 text-left ml-4 font-weight-bold projectHeader">Full Stack developer <span className="col-md-4 float-right">January 2021 - Present</span></reactbootstrap.FormLabel>
                 <reactbootstrap.ListGroup className="col-md-12 pl-2">
                  <reactbootstrap.ListGroup.Item   style={ListItemStyle}>Debugging developed live code and providing solutions for the issues and integrating new development. </reactbootstrap.ListGroup.Item>
                  <reactbootstrap.ListGroup.Item   style={ListItemStyle}>Using PHP, Codeignator, oracle database Technology.</reactbootstrap.ListGroup.Item>
                  <reactbootstrap.ListGroup.Item   style={ListItemStyle}>Worked as service desk also by sending mails to custmers and gave solutions for the issues.</reactbootstrap.ListGroup.Item>
                 </reactbootstrap.ListGroup>
           </div>
  </div>
  }
  const Education =()=>{
    return <div className="educationFont p-4  customFont">
            <div className="mt-2">
                 <reactbootstrap.FormLabel className="col-md-12 text-left font-weight-bold projectHeader">Bachelor of Engineering</reactbootstrap.FormLabel>
                 <reactbootstrap.FormLabel className="col-md-12 text-left ml-4">Vidya vikas Institute of Engineering and Technology.Mysuru</reactbootstrap.FormLabel>
                 <reactbootstrap.FormLabel className="col-md-12 text-left ml-4">Electronics and Communications Engineering<span className="col-md-2 float-right">2015 - 2018</span></reactbootstrap.FormLabel>
            </div>
                <div  className="mt-2">
                 <reactbootstrap.FormLabel className="col-md-12 text-left font-weight-bold projectHeader">Diploma</reactbootstrap.FormLabel>
                 <reactbootstrap.FormLabel className="col-md-12 text-left ml-4">Government CPC Polytechnic.Mysuru</reactbootstrap.FormLabel>
                 <reactbootstrap.FormLabel className="col-md-12 text-left ml-4">Electronics and Communications Engineering <span className="col-md-2 float-right">2012 - 2015</span></reactbootstrap.FormLabel>
            </div>
            <div  className="mt-2">
                 <reactbootstrap.FormLabel className="col-md-12 text-left font-weight-bold projectHeader">Highest school</reactbootstrap.FormLabel>
                 <reactbootstrap.FormLabel className="col-md-12 text-left ml-4">Rotary Education society. Mandya <span className="col-md-2 float-right">2012</span></reactbootstrap.FormLabel>
            </div>
           </div>
  }
  const Contact =()=>{
     return <div className="p-4">
             <img alt="gmail" title="rakeshshetty414@gmail.com" src="data:image/png;base64,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"/>
             <img alt="Linkdin" src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" title="https://www.linkedin.com/in/rakesh-h-m-a1b57b166"/>
             <img alt="Mobile" src="http://assetstdnext.s3.amazonaws.com/img/smartphone%402x.png" title="7795387746"/>
            </div>
  }
  const Resume =()=>{
    return <div className="p-5">
          <img alt="Download"  className="m-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXk4qp6nJ0j2gx8cVNyc0yoLNtk4ZjYq0FKsV72tIGUQEFsfuu5Oe-nN7hrx2JNjg7W78&usqp=CAU"/>
      </div>

  }
  const Skills =()=>{
    return <div className="p-5">
           <img src="HTML" src="https://www.maxpixel.net/static/photo/640/Icon-Html5-Logo-Html-2582748.png"/>
           <img alt="CSS" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"/>
           <img alt="React Js" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
           <img alt="Laravel"  src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_03fc1006d6560007d8c68b4458702ff3/laravel-development-services.png" />
           <img alt="Javascript" src="data:image/png;base64,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"/>
           <img alt="PHP" src="data:image/png;base64,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"/>
           <img alt="ReactBootstrap" src="data:image/png;base64,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"/>
           <img alt="PostgreSQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"/>
           </div>
  }

  return <div className="fluid">
  <reactbootstrap.Tabs className="nav-justified flex-column">
  <reactbootstrap.Tab eventKey={1} title={<span><div>Rakesh H M</div><div>Full Stack Developer</div></span>}>
  {ProfileImage()}
  </reactbootstrap.Tab>
  <reactbootstrap.Tab  eventKey={2} title={<span><i class="fa fa-user-circle-o m-1" aria-hidden="true"></i>About</span>}>
  {About()}
  </reactbootstrap.Tab>
  <reactbootstrap.Tab eventKey={4} title={<span><i class="fa fa-tasks m-1" aria-hidden="true"></i>Projects</span>}>
  {Projects()}
  </reactbootstrap.Tab>
  <reactbootstrap.Tab eventKey={5} title={<span><i class="fa fa-bookmark m-1" aria-hidden="true"></i>Skills</span>}>
  {Skills()}
  </reactbootstrap.Tab>
  <reactbootstrap.Tab eventKey={6} title={<span><i class="fa fa-graduation-cap m-1" aria-hidden="true"></i>Education</span>}>
  {Education()}
  </reactbootstrap.Tab>
  <reactbootstrap.Tab eventKey={7} title={<span><i class="fa fa-envelope-o m-1" aria-hidden="true"></i>Contact</span>}>
  {Contact()}
  </reactbootstrap.Tab>
  <reactbootstrap.Tab eventKey={8} title={<span><i class="fa fa-info-circle m-1" aria-hidden="true"></i>Resume</span>}>
  {Resume()}
  </reactbootstrap.Tab>
  </reactbootstrap.Tabs>
  </div>
}
export default MainFile;
