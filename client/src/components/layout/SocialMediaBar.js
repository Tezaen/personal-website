import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';

const SocialMediaButton = ({ url, icon }) => {
    const [spin, toggle] = useState(false); 

    const smbarStyle = useSpring({
        to: { rotateZ: spin ? 0 : 360 }
    })

    return (
        <a href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                onMouseEnter={() => toggle(!spin)}
            >
                <animated.i className={icon} style={smbarStyle} ></animated.i>
        </a>
    )
}

const SocialMediaBar = () => {

    return (
        <div className="icon-bar">
            <SocialMediaButton url="https://github.com/Tezaen/" icon="fab fa-github"/>
            <SocialMediaButton url="https://www.linkedin.com/in/roober-cruz/"  icon="fa fa-linkedin"/>
            <SocialMediaButton url="mailto:roober.cruz@gmail.com"  icon="fas fa-envelope-square" />
        </div>
    )
}

export default SocialMediaBar;
