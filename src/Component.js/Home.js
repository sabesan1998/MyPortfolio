import React from 'react'
import Myprofile from './images/Sabe.jpeg'

class Home extends React.Component{
    render(){
        return(
            <div>
                 <div class="heading">
                     <div class="jumbotron text-center" id="heading">
                        <h1 class="myname">G.Sabesan</h1>
                        <p class="myoccuption">Software Developer</p>
                        <ul class="nav nav-pills nav-justified" id="navigation">
                            <li class="nav-item">
                                <a class="nav-link active" href="/">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/CV">
                                   CV
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">
                                   Contact
                                </a>
                            </li>
                        </ul>
                     </div>
                     <div class="container">
                         <div class="row">
                             <div class="col-sm-4">
                                 <div class="rounded-circle">
                                     <img src={Myprofile} class="rounded-circle mx-auto d-block" alt="my image" width="200px" height="250px"/>
                                 </div>
                             </div>
                             <div class="col-sm-8">
                                 <h2 class="myskills">Career Objective</h2>
                                 <br/>
                                 <p class="skills">
                                 I am an enthusiastic, selfmotivated individual with a
                                great passion for seeking an
                                internship, where I can grow
                                and further improve my IT
                                skills while working dedicate
                                for the company. I can use
                                my technical and creative
                                skills to work towards
                                organizational goals.

                                 </p>

                             </div>
                         </div>
                     </div>
                     <div class="container">
                         <div class="row">
                             <div class="col-sm-6">
                             <h2 class="myskills">Technical Skills</h2>
                             <br/>
                             <ul class="skills">
                                 <li>
                                     Frontend languages - HTML , CSS , JavaScript , ReactJS
                                 </li>
                                 <li>
                                     Backend languages - Php , C++ , Java , NodeJS
                                 </li>
                                 <li>
                                     Database - MySQL , MongoDB
                                 </li>
                             </ul>
                             </div>
                             <div class="col-sm-6">
                             <h2 class="myskills">Education</h2>
                             <br/>
                             <ul class="skills">
                                 <li>
                                 [2019 - present] BSC (Hons) in Information
                                Technology specialising in SOFTWARE
                                  ENGINEERING - SLIIT
                                 </li>
                                 <li>
                                 [2004 - 2018] Attended C/Royal College
                                 </li>
                                 <li>
                                 Completed GCE Advanced Level in Maths stream - 2017 and 2018

                                 </li>
                                 <li>
                                 2014 O/L - 5A 3B 1S 

                                 </li>
                                 <li>
                                 2017 and 2018 A/L - 3S

                                 </li>
                             </ul>
                             </div>
                             <br/>
                             <div class="col-sm-12">
                             <h2 class="myskills">Projects</h2>
                             <br/>
                             <table class="table table-dark table-striped">
                                 <thead>
                                     <tr>
                                         <th>Project Name</th>
                                         <th>Progamming Languages</th>
                                         <th>Project Link</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                         <td>Online Help Desk</td>
                                         <td>HTML, JavaScript, CSS, Bootstrap, Servlet, JSP, Java</td>
                                         <td><a href={"https://github.com/Mathursan-007/HelpDesk"}>HelpDesk</a></td>
                                     </tr>
                                     <tr>
                                         <td>Online Hotel Management System</td>
                                         <td>HTML, JavaScript, CSS, Bootstrap, Servlet, JSP, Java</td>
                                         <td><a href={"https://github.com/Mathursan-007/Metron"}>Metron</a></td>
                                     </tr>
                                     <tr>
                                         <td>Crime Alert Application</td>
                                         <td>Java, Firebase</td>
                                         <td><a href={"https://github.com/arosh-segar/MAD-updated"}>Crime Alert Application</a></td>
                                     </tr>
                                     <tr>
                                         <td>E-Shopping Application</td>
                                         <td>HTML, Js, CSS, PHP, Bootstrap, React Js, Node Js, Express Js</td>
                                         <td><a href={"https://github.com/Mathursan-007/ShoppingApp"}>ShoppingApp</a></td>
                                     </tr>
                                     <tr>
                                         <td>Conference Application</td>
                                         <td>HTML, Js, CSS, PHP, Bootstrap, React Js, Node Js, Express Js</td>
                                         <td><a href={"https://github.com/Mathursan-007/LynxConference"}>Conference Application</a></td>
                                     </tr>
                                     </tbody>
                             </table>
                             </div>
                             </div>
                             </div>
                             </div>
                             <div class="jumbotron text-center" id="footer">
                                 <ul class="nav justify-content-center">
                                     <li class="nav-item">
                                         <a href="" class="fa fa-linkedin nav-link"
                                         style={{color:"black"}}
                                         />
                                     </li>
                                     <li class="nav-item">
                                         <a href="" class="fa fa-github nav-link"
                                         style={{color:"black"}}
                                         />
                                     </li>
                                     <li class="nav-item">
                                         <a href="" class="fa fa-facebook nav-link"
                                         style={{color:"black"}}
                                         />
                                     </li>
                                     <li class="nav-item">
                                         <a href="" class="fa fa-email nav-link"
                                         style={{color:"black"}}
                                         />
                                     </li>
                                 </ul>
                             </div>
                </div>
        );
    }
}
export default Home;