import { Outlet, Link, Routes, Route } from "react-router-dom";
import { Bio, Works, Contact } from '../pages';
import { SingleWork } from ".";
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react'
import { GET_PROJECTS } from '../utils/queries';



export default function Header(props) {



    return (
        <>

            <nav className="navbar justify-content-center p-0">
                <div className="container col-12 justify-content-around">
                    <a href="https://github.com/tevissaur" target="blank" className="rounded-circle circle mt-3 mb-2 bi-github"
                        id="nav-circle-git">
                    </a>
                    <Link to="./assets.Tevis-Reilly.pdf" className="rounded-circle main-circle mt-3 mb-2" id="nav-circle-0">

                    </Link>
                    <a href="https://www.linkedin.com/in/tevis-r-34014147" target="blank"
                        className="rounded-circle circle mt-3 mb-2 bi-linkedin" id="nav-circle-linked">
                    </a>

                </div>
                <div className="container justify-content-center col-12 col-lg-8" id="link-container">

                    <Link to="tevissaur/bio" className="row align-content-center text-center rounded-circle circle mx-2" id="nav-circle-1">
                        <i className="bi-person-circle link-text"></i>
                    </Link>
                    <Link to="tevissaur/works" className="row align-content-center text-center rounded-circle circle mx-2 m-0"
                        id="nav-circle-2">
                        <i className="bi-folder-fill link-text"></i>
                    </Link>
                    <Link to="tevissaur/contact-me" className="row align-content-center text-center rounded-circle circle mx-2 m-0 "
                        id="nav-circle-3">
                        <i className="bi-envelope-open-fill link-text"></i>
                    </Link>

                </div>
                <div className="shape"></div>
            </nav>
            <Routes >
                <Route path="/tevissaur" element={<Bio />} >

                    <Route path="works" element={<Works />} />
                    <Route path="bio" element={<Bio />} />
                    <Route path="contact-me" element={<Contact />} />
                    <Route path="works/netflix-and-grill" element={
                        <SingleWork
                            title="Netflix and Grill"
                            desc="A web app to help you choose your movie and meal for a pleasant evening"
                            repoLink=""
                            demoLink=""
                            img="work-net-grill"
                            authors={["Linh Bui", "Alexander Leino", "Tevis Reilly"]}
                        />
                    } />
                    <Route path="works/tic-tac-toe" element={
                        <SingleWork
                            title="Tic Tac Toe"
                            desc="The classic game that everyone loves"
                            repoLink=""
                            demoLink=""
                            img="work-ttt"
                            authors={["Tevis Reilly"]}
                        />
                    } />
                    <Route path="works/forene-wiki" element={
                        <SingleWork
                            title="Forene Wiki"
                            desc="A web based wiki of my own homebrew DnD world"
                            repoLink=""
                            demoLink=""
                            img="work-forene"
                            authors={["Tevis Reilly"]}
                        />
                    } />
                    <Route path="works/chicken-run" element={
                        <SingleWork
                            title="Chicken Run"
                            desc="This web application gives you all the tools you need to organize your own garden."
                            repoLink=""
                            demoLink=""
                            img="work-chicken"
                            authors={["Tevis Reilly", "Adam Olsey", "Travis Schram", "Max Parks"]}
                        />
                    } />
                </Route>
            </Routes>
            <Outlet />
        </>
    )
}