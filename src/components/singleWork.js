import cssLogo from '../assets/images/CSS3_logo.svg'
import htmlLogo from '../assets/images/HTML5_Badge.svg'
import nodeLogo from '../assets/images/Node.js_logo.svg';
import sassLogo from '../assets/images/Sass_Logo_Color.svg'
import jsLogo from '../assets/images/js_logo.svg'
import reactLogo from "../assets/images/React-icon.svg"

const SingleWork = ({ title, desc, authors, img, repoLink, demoLink }) => {


    return (
        <>
            <section className="container justify-content-center p-0 mt-5">
                <div className="text-center col-12 row justify-content-center m-auto">
                    <h2 className="rounded-3 text-center col-9 col-md-6 col-lg-4 p-2" id="work-title">
                        {title}
                    </h2>
                </div>
                <div className="row flex-lg-column m-auto col-12 p-0 justify-content-center">
                    <div className="col-11 d-flex col-lg-10 rounded-3 p-3 my-4 solo-work-desc m-auto">
                        <div className="col-12 p-2 ">
                            {desc}
                        </div>
                    </div>
                    <div className="d-flex col-5 col-md-6 col-lg-3 p-2 flex-wrap solo-work-author rounded-3">
                        <div className="col-12 fs-1"> Made By</div>
                        {authors.map((author) => {

                            return (<div className="col-12 fs-4" key={author}> {author} </div>)
                        })}

                    </div>
                    <div className="d-flex col-10 col-md-9 col-lg-6 p-2 mt-4 px-4 flex-wrap solo-work-author rounded-3">
                        <img className='col-2' src={cssLogo} alt="" />
                        <img className='col-2' src={htmlLogo} alt="" />
                        <img className='col-2' src={nodeLogo} alt="" />
                        <img className='col-2' src={jsLogo} alt="" />
                    </div>
                    <div className="rounded-circle solo-work-image col-12" id={img}>

                    </div>

                </div>
            </section>
        </>
    )
}

export default SingleWork