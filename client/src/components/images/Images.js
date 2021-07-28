import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { Row, Col, Modal, Button } from 'react-bootstrap';

const Images = ({ images }) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [url, setUrl] = useState('');
    
    const imageStyle = {
        width: '300px'
    }

    const handleShow = (breakpoint, imageUrl) => {
        setFullscreen(breakpoint);
        setShow(true);
        setUrl(imageUrl);
    }

    const onClick = (imageUrl) => {
        console.log("FUCK YOU");
        handleShow(true, imageUrl);
    }

    return (
        <>
            {
                images !== undefined ? (
                    <Row>
                    {
                        images.map( image =>
                            <Col className="py-3">
                                <Image 
                                    src={ image } 
                                    className="fluid" 
                                    rounded
                                    onClick={() => onClick(image)}
                                    style={imageStyle}
                                    />
                            </Col>
                        )
                    }
                    </Row>
                ) : <></>
            }
            <Modal show={show} fullscreen={ true } onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={ url }/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Images
