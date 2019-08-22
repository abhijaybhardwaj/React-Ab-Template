import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export default class WebsiteWork extends Component{
    render(){
        return(
            <Container>
                <Row className="website-Project"><div className="image-cover"></div></Row>
                <Row className="project-Heading justify-content-center">
                        <h1>Website Projects</h1>
                        <Col xs={12}>
                        <p>We are a mix of design, technology and marketing. Our projects are a combination of creativity, trends and traditions. Our mission is to accompany you on your way to conquering the peaks of business.</p>
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
            </Container>
        );
    }
}
