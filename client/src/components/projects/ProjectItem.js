import React from 'react';
import PropTypes from 'prop-types';
import TimestampToDate from '../../utils/timestamp';
import { Carousel } from 'react-bootstrap';

const ProjectItem = ({ project }) => {
    // destructure the project object
    const { title, desc, datePosted, techs, images, githubUrl, siteUrl } = project;

    const datePostedConverted = TimestampToDate(datePosted.seconds);
    return (
        <div className="card my-2 mx-5">
            <div className="card-body">
                <h1 className="text-center">
                    { title }
                </h1>
                <div className="card-subtitle lead my-1" dangerouslySetInnerHTML={{__html: desc}}>
                    
                </div>
                <div className="card-text mb-1">
                    {
                        githubUrl !== null ? <><a href={githubUrl}  className="mr-3" target="_blank" rel="noopener noreferrer">Github</a></> : <></>
                    }
                    {
                        siteUrl !== null ? <><a href={siteUrl} className="mr-3" target="_blank" rel="noopener noreferrer">Website</a></> : <></>
                    }
                </div>
                {/* <Card.Text>  I would actually just use this instead of dangerouslySetInnerHtml
                    { desc }        as it is vulnerable to cross site SCRIPTING (XSS)
                                maybe use another node package. For now it will stick
                </Card.Text> */}
                {
                    techs !== undefined ? <div className="card-text">
                        Technologies: {
                            techs.map(tech => 
                                <span className="border mx-2 px-2" key={tech}>{tech}</span>
                            )
                        }
                    </div> : <></>
                }
                Date Posted: { datePostedConverted }
                {
                    images.length > 0 ? <p>Images: </p> : <></>
                }
                {
                    images !== undefined ? 
                    <Carousel  fade>
                        {
                            images.map(image => 
                                <Carousel.Item key={image}>
                                    <img src={image} key={image} width="100%" height="100%"/>
                                    <Carousel.Caption>
                                        <h3>{title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        }
                    </Carousel> : <></>   /* This is the old way of displaying images */
                }
                
            </div>
        </div>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectItem
