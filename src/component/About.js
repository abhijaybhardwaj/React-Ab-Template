import React, {Component} from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { IoMdPhonePortrait, IoIosPin, IoMdMailUnread, IoIosGlobe, IoMdDownload } from "react-icons/io";
import {Link} from 'react-router-dom';
import { FaFacebookF, FaBehance, FaDribbble, FaFlickr, FaCodepen, FaGithub, FaFigma,FaTumblr, FaLinkedinIn, FaSkype, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube,  } from "react-icons/fa";


export default class About extends Component{
    render(){
        return(
            <div>
                <Container className="introduction-About">
                    <Row className="intro-asb-images justify-content-md-center">
                        <Col md="auto" className="profile">
                          <Image src="images/asb-profile.jpg" alt="ASB" />
                        </Col>
                    </Row>
                    <Row className="justify-content-xs-center">
                        <Col xs lg="12">
                          <h2>ABHIJAY BHARDWAJ</h2>
                          <p>Web-Designer & Developer</p>
                        </Col>
                    </Row>
                    <Row className="About-Introduction">
                        <Col xs={12} className="Introduction-Self">
                            <ul className="contactMe">
                                <li><h1><IoMdPhonePortrait />  +91 8920-242-708</h1></li>
                                <li><h1><IoMdMailUnread />  asbfreelancing@gmail.com</h1></li>
                                <li><h1><IoIosPin />  A-146/5 Vikash Marge Shakarpur New Delhi 92</h1></li>
                                <li><h1><IoIosGlobe />  http://abhijaybhardwaj.com</h1></li>
                                <li><h1><IoMdDownload /><Link  to="/" href="/" download="file">Download CV</Link></h1></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                    <Col xs={12} className="intro-About">
                        <p>
                         I'm Abhijay Bhardwaj I create web + mobile interfaces, brand identities, and user experiences,
                         and having 2 years of hands-on experience also teach how to Web design and code for last 1+ years for those who want to learn.
                         This will really kind of part of me, when I see a new technique, I don’t know why but, I want to learn it, so that I can share with others.
                         I have no preference for profitable projects, I prefer to focus on those that I can really make a difference, that can bring changes and benefits to the professional life of the client, 
                         this being open to suggestions and new perspectives. So that I can grow when my client grows, my only focus is on that type of projects which will teach me something new every time when I work on it. 
                         If you are either an agency or freelancer and you would like to work with me, feel free to <Link to="/Contact" href="/Contact"> contact me</Link>.</p>
                    </Col>
                    </Row>
                    <Row className="skill-About justify-content-center">
                        <h1>MY SKILLS</h1>
                        <Col xs={12}>
                        <p>Some Of Expertise</p>
                     </Col>
                    </Row>
                    <Row className="line-Maring justify-content-center">
                        <Col>
                         <h3>HTML/HTML5</h3>
                            <ProgressBar animated now={90} />
                        </Col>
                        <Col>
                         <h3>CSS/CSS3</h3>
                            <ProgressBar animated now={85} />
                        </Col>
                        <Col>
                         <h3>UI/UX DESIGN</h3>
                            <ProgressBar animated now={70} />
                        </Col>
                    </Row>
                    <Row className="line-Maring justify-content-center">
                        <Col>
                         <h3>PHP/MYSQL DATA BASE</h3>
                            <ProgressBar animated now={68} />
                        </Col>
                        <Col>
                         <h3>REACT JS</h3>
                            <ProgressBar animated now={50} />
                        </Col>
                        <Col>
                         <h3>ASP.NET FRAMWORK</h3>
                            <ProgressBar animated now={65} />
                        </Col>
                    </Row>
                    <Row className="line-Maring justify-content-center">
                        <Col>
                         <h3>JAVA SCRIPTS</h3>
                            <ProgressBar animated now={75} />
                        </Col>
                        <Col>
                         <h3>JQUERY</h3>
                            <ProgressBar animated now={80} />
                        </Col>
                        <Col>
                         <h3>ADOBE PHOTOSHOP</h3>
                            <ProgressBar animated now={85} />
                        </Col>
                    </Row>
                    <Row className="line-Maring justify-content-center">
                        <Col>
                         <h3>ILLUSTRATOR</h3>
                            <ProgressBar animated now={60} />
                        </Col>
                    </Row>
                    <Row className="portfolio-About justify-content-center">
                        <h1>PORTFOLIO</h1>
                        <Col xs={12}>
                        <p>My Recent Works</p>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>
                         <div className="project-Works">
                           <img src="https://dummyimage.com/350x350.png" alt="roomshope"/>
                         </div>
                        </Col>
                        <Col>
                         <div className="project-Works">
                           <img src="https://dummyimage.com/350x350.png" alt="roomshope"/>
                         </div>
                        </Col>
                        <Col>
                         <div className="project-Works">
                           <img src="https://dummyimage.com/350x350.png" alt="roomshope"/>
                         </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col>
                         <div className="project-Works">
                           <img src="https://dummyimage.com/350x350.png" alt="roomshope"/>
                         </div>
                        </Col>
                        <Col>
                         <div className="project-Works">
                           <img src="https://dummyimage.com/350x350.png" alt="roomshope"/>
                         </div>
                        </Col>
                        <Col>
                         <div className="project-Works">
                           <img src="https://dummyimage.com/350x350.png" alt="roomshope"/>
                         </div>
                        </Col>
                    </Row>
                     <Row className="justify-content-md-center">
                            <Col md="auto">
                             <Link className="about-btn" to="/WebsiteWork" href="/WebsiteWork"> LOAD MORE </Link>
                            </Col>
                      </Row>
                    <Row className="socialLink-About justify-content-center">
                        <h1>Get On touch With me</h1>
                        <Col xs={10} className="justify-content-center">
                            <ul className="about-socialLinks">
                                <li><a to="/" href="https://www.linkedin.com/in/abhijay-bhardwaj-a8642318b/" target="blank"><FaLinkedinIn /></a></li>
                                <li><a to="/" href="https://join.skype.com/invite/pWxdDQA2dVfe" target="blank"><FaSkype /></a></li>
                                <li><a to="/" href="https://twitter.com/ABHIJAYBHARDWA1" target="-blank"><FaTwitter /></a></li>
                                <li><a to="/" href="https://www.facebook.com/abhijaybhardwaj.1238292" target="blank"><FaFacebookF/></a></li>
                                <li><a to="/" href="https://www.instagram.com/abhijay_bhardwaj/?hl=en" target="-blank"><FaInstagram/></a></li>
                                <li><a to="/" href="https://api.whatsapp.com/send?phone=918920242708" target="_blnak"><FaWhatsapp /></a></li>
                                <li><a to="/" href="https://www.youtube.com/channel/UC6_B_otvl2FjuM2kAJhNXuQ/featured?disable_polymer=1" target="_blnak"><FaYoutube /></a></li>
                                <li><a to="/" href="https://www.behance.net/abhijaybhardwaj" target="_blnak"><FaBehance /></a></li>
                                <li><a to="/" href="https://dribbble.com/abhijaybhardwaj#" target="_blnak"><FaDribbble /></a></li>
                                <li><a to="/" href="https://www.flickr.com/photos/183023531@N04/" target="_blnak" ><FaFlickr /></a></li>
                                <li><a to="/" href="https://codepen.io/abhijaybhardwaj/" target="_blnak"><FaCodepen /></a></li>
                                <li><a to="/" href="https://github.com/abhijaybhardwaj" target="_blnak"><FaGithub /></a></li>
                                <li><a to="/" href="https://www.figma.com/files/project/3271521/ABHIJAY-BHARDWAJ" target="_blnak"><FaFigma /></a></li>
                                <li><a to="/" href="https://abhijaybhardwaj.tumblr.com/" target="_blnak"><FaTumblr /></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                

            </div>
        );
    }
}
