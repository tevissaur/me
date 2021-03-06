import { Link } from "react-router-dom";
import resume from '../assets/Resume.docx.pdf'
import background from '../assets/images/header-background.jpg'


export default function Header(props) {



    return (
        <>

            <nav className="navbar justify-content-center p-0">
                <div className="container col-12 justify-content-around">
                    <a href="https://github.com/tevissaur" target="blank" className="rounded-circle circle mt-3 mb-2 bi-github"
                        id="nav-circle-git">
                    </a>
                    <a href={resume} className="rounded-circle main-circle mt-3 mb-2" id="nav-circle-0">

                    </a>
                    <a href="https://www.linkedin.com/in/tevis-r-34014147" target="blank"
                        className="rounded-circle circle mt-3 mb-2 bi-linkedin" id="nav-circle-linked">
                    </a>

                </div>
                <div className="container justify-content-center col-12 col-lg-8" id="link-container">

                    <Link to="/bio" className="row align-content-center text-center rounded-circle circle mx-2" id="nav-circle-1">
                        <i className="bi-person-circle link-text"></i>
                    </Link>
                    <Link to="/works" className="row align-content-center text-center rounded-circle circle mx-2 m-0"
                        id="nav-circle-2">
                        <i className="bi-folder-fill link-text"></i>
                    </Link>
                    <Link to="/contact-me" className="row align-content-center text-center rounded-circle circle mx-2 m-0 "
                        id="nav-circle-3">
                        <i className="bi-envelope-open-fill link-text"></i>
                    </Link>

                </div>
                <div className="shape">
                </div>
                <div className="shape-background">

                </div>
            </nav>
        </>
    )
}