import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import TimestampToDate from '../../utils/timestamp';
import ImageList from '../images/Images';
//import ProjectContext from '../../context/project/projectContext';

const ProjectItem = ({ project }) => {
    // destructure the project object
    const { title, desc, datePosted, techs, images } = project;

    // console.log("Title",title);
    // console.log("Desc", desc);
    // console.log("Date Posted", datePosted);
    // console.log("Techs used", techs);

    const datePostedConverted = TimestampToDate(datePosted.seconds);
    return (
        <Card className="my-2 mx-5">
            <Card.Body>
                <h1 className="text-center">
                    { title }
                </h1>
                <Card.Text dangerouslySetInnerHTML={{__html: desc}}>
                    
                </Card.Text>
                {/* <Card.Text>  I would actually just use this instead of dangerouslySetInnerHtml
                    { desc }        as it is vulnerable to cross site SCRIPTING (XSS)
                                maybe use another node package. For now it will stick
                </Card.Text> */}
                {
                    techs !== undefined ? <Card.Text>
                        Technologies: {
                            techs.map(tech => 
                                <span className="border mx-2 px-2" key={tech}>{tech}</span>
                            )
                        }
                    </Card.Text> : <></>
                }
                {
                    // images !== undefined ? <div>
                    //     Images: {
                    //         images.map(image => 
                    //             <img src={image} key={image}/>
                    //         )
                    //     }
                    // </div> : <></>   This is the old way of displaying images
                }
                {/* <ImageList images={images}/> */}
                Date Posted: { datePostedConverted }
            </Card.Body>
        </Card>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectItem
