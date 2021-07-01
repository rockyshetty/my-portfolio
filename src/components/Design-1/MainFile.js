
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
    return <img className="col-md-12 m-0 p-0" style={{height:"90vh",width:"100%"}}src='https://drive.google.com/uc?export=view&id=14VpzV8rGQUq_ndhwmmF8TYSE6flWbt_L'/>

  }
  const About =()=>{
    return <React.Fragment className="col-md-12 col-sm-12 justify-content-md-center">
           <p className="customFont about">
                           A Full Stack Developer with 2 years of experience in React Js, Laravel, PostgreSQL, Javascript, Php.
           </p>
           </React.Fragment>
  }
  const Projects =()=>{
    return <div className="customFont p-4">
           <div className="mt-3">
                <p className="col-md-12 text-left font-weight-bold projectHeader">Digital Quality Management Tool for Belgium industry</p>
                <p className="col-md-12 text-left ml-4 font-weight-bold projectHeader">Full Stack developer <span className="col-md-4 float-right">August 2019 - January 2021 </span></p>
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
                 <p className="col-md-12 text-left font-weight-bold projectHeader">Middleware for Ecommerce site.</p>
                 <p className="col-md-12 text-left ml-4 font-weight-bold projectHeader">Full Stack developer <span className="col-md-4 float-right">January 2021 - Present</span></p>
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
                 <p className="col-md-12 text-left font-weight-bold projectHeader">Bachelor of Engineering</p>
                 <p className="col-md-12 text-left ml-4">Vidya vikas Institute of Engineering and Technology.Mysuru</p>
                 <p className="col-md-12 text-left ml-4">Electronics and Communications Engineering<span className="col-md-2 float-right">2015 - 2018</span></p>
            </div>
                <div  className="mt-2">
                 <p className="col-md-12 text-left font-weight-bold projectHeader">Diploma</p>
                 <p className="col-md-12 text-left ml-4">Government CPC Polytechnic.Mysuru</p>
                 <p className="col-md-12 text-left ml-4">Electronics and Communications Engineering <span className="col-md-2 float-right">2012 - 2015</span></p>
            </div>
            <div  className="mt-2">
                 <p className="col-md-12 text-left font-weight-bold projectHeader">Highest school</p>
                 <p className="col-md-12 text-left ml-4">Rotary Education society. Mandya <span className="col-md-2 float-right">2012</span></p>
            </div>
           </div>
  }
  const Contact =()=>{
     return <div className="p-4">
             <img alt="gitHub" src="https://learning.cyverse.org/projects/foss-2020/en/latest/_images/git-logo.png"/>
             <img alt="gmail" title="rakeshshetty414@gmail.com" src="https://i.pinimg.com/originals/dc/eb/d4/dcebd4ff4d70c47a3d8825be3c768f40.png"/>
             <img alt="Linkdin" src="https://logodix.com/logo/4344.png" title="https://www.linkedin.com/in/rakesh-h-m-a1b57b166"/>
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
           <img alt="Laravel"  src="https://turreta.com/wp-content/uploads/2018/10/laravel-logo.png" />
           <img alt="Javascript" src="https://www.asquero.com/static/img/topics/javascript.png"/>
           <img alt="PHP" src="https://pngimg.com/uploads/php/php_PNG43.png"/>
           <img alt="ReactBootstrap" src="https://img.icons8.com/color/480/bootstrap.png"/>
           <img alt="PostgreSQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"/>
           </div>
  }

  return <div className="fluid">
  <reactbootstrap.Tabs className="nav-justified">
  <reactbootstrap.Tab eventKey={1} title={<span><div>Rakesh H M</div><div>Full Stack Developer</div></span>}>
  {ProfileImage()}
  </reactbootstrap.Tab>
  <reactbootstrap.Tab  eventKey={2} title={<span><i class="fa fa-fw fa-user m-1" aria-hidden="true"></i>About</span>}>
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
