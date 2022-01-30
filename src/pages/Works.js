
import { Link } from 'react-router-dom'



export default function Works(props) {
    


    return (
        <>
            <section className="container justify-content-center p-0 mt-5" id="work">
                <div className="text-center col-12 row justify-content-center m-auto">
                    <h3 className="rounded-3 col-10 col-md-4 col-lg-4 p-2" id="work-title">
                        my work
                    </h3>
                </div>
                <div className="d-flex flex-lg-row flex-column work-container text-center">
                    <div className="position-absolute" id="work-shape">
                    </div>
                    <Link to="netflix-and-grill" className="rounded-circle work-content" id="work-net-grill">

                        <div className='text-center'> Netflix and Grill </div>
                    </Link>

                    <Link to="forene-wiki" className="rounded-circle work-content" id="work-forene">

                        <div className='text-center'> DnD World Wiki </div>
                    </Link>
                    <Link to="tic-tac-toe" className="rounded-circle work-content-last mb-5" id="work-ttt">

                        <div className='text-center'> Tic Tac Toe </div>
                    </Link>
                </div>
                <div className="d-flex flex-lg-row flex-column work-container work-row-two text-center">
                    <Link to="chicken-run" className="rounded-circle work-content" id="work-chicken">

                        <div className='text-center'> Chicken Run </div>
                    </Link>
                </div>
            </section >
        </>
    )
}