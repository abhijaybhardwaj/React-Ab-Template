import React, {Component} from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';



export default class Contact extends Component{
    render(){
        return(
            <Container className="test">
                <Row className="contact-us"><div className="image-cover"></div></Row>
                <Row className="project-Heading justify-content-center">
                    <Col md="auto">
                        <h1>Let's Talk </h1>
                        <Col xs={12}>
                        <p>If you have any questions, don’t be shy! Fill in the form below so we can answer your question(s) as efficiently as possible.</p>
                        </Col>
                    </Col>
                 </Row>
                 <Row className="form-contact justify-content-center text-center">
                         <Form>
                             <p className="massege-contact">Tell us about your brand's needs and we'll talk about how we can put it in tune;)We're closer to our first date!</p>
                            <Col xs={12}>
                             <Form.Control type="text" placeholder="Name" />
                            </Col>
                            <Col xs={12}>
                             <Form.Control type="email" placeholder="Email" />
                            </Col>
                            <Col xs={12}>
                             <Form.Control as="textarea" placeholder="Massage" />
                            </Col>
                            <Button className="massage-btn" type="submit">SEND ME</Button>
                        </Form>
                 </Row>
            </Container>
        );
    }
}
