import { Outlet  } from "react-router-dom"

export const Layout = () => {

    return (
        <>
            <nav className="navbar justify-content-center p-0">
                <div className="container col-12 justify-content-around">
                    <a href="https://github.com/tevissaur" target="blank" className="rounded-circle circle mt-3 mb-2"
                        id="nav-circle-git">
                        <i className="bi-github"></i>
                    </a>
                    <a href="./assets/Tevis-Reilly.pdf" className="rounded-circle main-circle mt-3 mb-2" id="nav-circle-0">

                    </a>
                    <a href="https://www.linkedin.com/in/tevis-r-34014147" target="blank"
                        className="rounded-circle circle mt-3 mb-2" id="nav-circle-linked">
                        <i className="bi-linkedin"></i>
                    </a>

                </div>
                <div className="container justify-content-center col-12 col-lg-8" id="link-container">
                    {/* <!-- <div className="rounded-circle circle mx-2" id="nav-circle-1">
                </div> --> */}
                    <a href="#bio" className="row align-content-center text-center rounded-circle circle mx-2" id="nav-circle-1">
                        <i className="bi-person-circle link-text"></i>
                    </a>
                    <a href="#work" className="row align-content-center text-center rounded-circle circle mx-2 m-0"
                        id="nav-circle-2">
                        <i className="bi-folder-fill link-text"></i>
                    </a>
                    <a href="#contact" className="row align-content-center text-center rounded-circle circle mx-2 m-0"
                        id="nav-circle-3">
                        <i className="bi-envelope-open-fill link-text"></i>
                    </a>

                </div>
                <div className="shape"></div>
                {/* <!-- <div id="expand-menu">&#8616;</div> --> */}
            </nav>
            <Outlet />
        </>
    )
}

// export default Layout