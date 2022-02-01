


const BioElement = (props) => {

    return (
        <section className="container justify-content-center p-0 mt-5 m-auto" id="bio">
            <div className="text-center m-auto col-12 row justify-content-center">
                <h2 className="rounded-3 text-center col-10 col-md-4 col-lg-4 p-2 m-auto" id="bio-title">
                    about me
                </h2>
            </div>
            <div className="col-12 p-0 justify-content-center">
                <div className="rounded-circle col-5 m-auto mt-5" id="bio-pic"></div>

                <p className="col-11 col-lg-7 rounded-3 p-3 my-5" id="bio-content">
                    I am currently a student of web development. I have made a few things with HTML and CSS, and am
                    just now working my way into JS. I enjoy playing with colors and layouts, and creating visually
                    appealing websites. I enjoy the outdoors, Dungeons and Dragons, and video games. I let these
                    interests inspire my design choices, and my project choices.
                </p>
            </div>
        </section>
    )
}

export default BioElement