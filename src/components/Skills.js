import { useEffect, useState } from "react";
import cssLogo from '../assets/images/CSS3_logo.svg'
import htmlLogo  from '../assets/images/HTML5_Badge.svg'
import bootstrapLogo from '../assets/images/Bootstrap_logo.svg';
import nodeLogo from '../assets/images/Node.js_logo.svg';
import sassLogo from '../assets/images/Sass_Logo_Color.svg'
import jsLogo from '../assets/images/js_logo.svg'
import pyLogo from "../assets/images/Python-logo-notext.svg"
import mysqlLogo from "../assets/images/MySQL_textlogo.svg"
import reactLogo from "../assets/images/React-icon.svg"


const Skills = () => {

    const [theta, setTheta] = useState(2 * Math.PI / 9)
    const [currentImage, setCurrentImage] = useState(0)
    const [styles, setStyles] = useState({
        figureStyles: {
            transform: `rotateY(${currentImage * -theta}rad)`
        }
    })
    const handleRotate = async (e) => {
        e.stopPropagation();

        let t = e.target;
        if (t.tagName.toUpperCase() !== 'BUTTON') {
            return;
        }
        if (t.classList.contains('next')) {
            setCurrentImage(currentImage => currentImage + 1);
        }
        else {
            setCurrentImage(currentImage => currentImage - 1);
        }
    }
    
    useEffect(() => {
        setStyles({
            figureStyles: {
                transform: `rotateY(${currentImage * -theta}rad)`
            }
        })
        setTheta(theta)
    }, [currentImage, theta])


    return (
        <section>
            <div className="myCarousel">
                <h2 className="rounded-3 text-center col-10 col-md-4 col-lg-4 p-2 my-5" id="skills-title">
                    tech i use
                </h2>
                <figure style={ styles.figureStyles } onChange={setStyles}>
                    <img src={cssLogo} alt="" />
                    <img src={htmlLogo} alt="" />
                    <img src={bootstrapLogo} alt="" />
                    <img src={sassLogo} alt="" />
                    <img src={nodeLogo} alt="" />
                    <img src={jsLogo} alt="" />
                    <img src={pyLogo} alt="" />
                    <img src={mysqlLogo} alt="" />
                    <img src={reactLogo} alt="" />

                </figure>
                <nav>
                    <button className="nav prev" onClick={ handleRotate }>Prev</button>
                    <button className="nav next" onClick={ handleRotate }>Next</button>
                </nav>
            </div>

        </section>
    )
}

export default Skills