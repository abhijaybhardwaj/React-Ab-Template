import React, {Component} from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const heading = ["H!,",'THIS IS', 'ABHIJAY']
export default class Home extends Component{
    render(){
        return(
          <Container fluid>
            <Row className="header-conner">
                <Col xs={12} className="justify-content-center">
                     <h1 className="Heading">{heading.join('\n')}</h1>
                      <Card.Title className="quetes blockquote-footer">Creative Web Designer & Full Stack Developer</Card.Title>
                      <Card.Title className="Massage">We create sites with WOW effect, bringing real profits and cool web services.
                     </Card.Title>
                    <Link className="btnStyle" to="/" href="/">Hire Me !</Link>
                </Col>
            </Row>
          </Container>
          
        );
    }
}