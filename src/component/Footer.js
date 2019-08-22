import React, {Component} from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export default class Footer extends Component{
    render(){
        return(
            <Container>
                <Row  className="justify-content-md-center">
                    <Col md="auto">
                        <p className="footer">&copy;2019 ABHIJAY BHARDWAJ, All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
