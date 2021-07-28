import React, { useState } from 'react';

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
        handleShow(true, imageUrl);
    }

    return (
        <>
            {
                images !== undefined ? (
                    <div className="row">
                    {
                        images.map( image =>
                            <div className="col py-3">
                                <img 
                                    src={ image } 
                                    className="rounded fluid" 
                                    onClick={() => onClick(image)}
                                    style={imageStyle}
                                    />
                            </div>
                        )
                    }
                    </div>
                ) : <></>
            }
            {/* <Modal show={show} fullscreen={ true } onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={ url }/>
                </Modal.Body>
            </Modal> */}
        </>
    )
}

export default Images
