import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default class BrandingWork extends Component{
    render(){
        return(
            <Container>
                <Row className="branding-Project"><div className="image-cover"></div></Row>
                <Row className="project-Heading justify-content-center">
                        <h1>Branding Projects</h1>
                        <Col xs={12}>
                        <p>Full range of services for creating a brand. Naming, logo design, corporate identity, slogan, graphic design</p>
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
