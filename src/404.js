import React, {Component} from 'react';
import { Modal, Container} from 'react-bootstrap';

export default class Error extends Component{
    render(){
        return(
            <div className="Error-Page">
                <Container>
                    <Modal.Dialog>
                    <h1>404</h1>
                    <Modal.Body >
                        <p>Page Not Found</p>
                    </Modal.Body>
                    </Modal.Dialog>
                </Container>
            </div>
        );
    }
}
