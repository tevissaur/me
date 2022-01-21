import { Header } from "../components";


export default function Contact(props) {
    return (
        <>
            <Header />
            <section className="container justify-content-center mt-5" id="contact">
                <div className="text-center col-12 m-auto row justify-content-center">
                    <h4 className="rounded-3 text-center col-10 col-md-4 col-lg-4 p-2" id="contact-title">
                        contact me
                    </h4>

                </div>
                <div className="text-center col-10 mt-5 m-auto row justify-content-center">
                    <p className="rounded-3 text-center col-11 col-md-4 col-lg-4 p-2 m-auto" id="email">
                        tevisreilly1@gmail.com
                    </p>

                </div>
                <div className="col-12 col-sm-10 col-lg-8 rounded-3 text-start mx-auto my-5" id="contact-form-container">
                    <form className="pt-2 pb-5 px-2" action="mailto:tevisreilly1@gmail.com" method="GET">
                        <label className="p-2" htmlFor="sender-name">
                            Your name:
                        </label>
                        <input className="w-100 px-2 py-1" type="text" name="sender-name" id="sender-name" required
                            placeholder="John Doe..." />
                        <label className="p-2" htmlFor="message-content">
                            Your Message:
                        </label>
                        <textarea className="w-100 p-2" name="message-content" id="message-content" cols="30" rows="5"
                            placeholder="This website is awesome!"></textarea>
                        <button className="btn btn-dark">Send Message</button>
                    </form>

                </div>

            </section>
        </>
    )
}