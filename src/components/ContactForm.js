import { Button, Form, Fade, Collapse } from "react-bootstrap"
import { useEffect, useState } from "react"


const ContactForm = (props) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(!open)
    }, [])

    return (
        <Fade in={open}>

            <section className="container justify-content-center mt-5" id="contact">

                <div className="text-center col-12 m-auto row justify-content-center">
                    <h4 className="rounded-3 text-center col-8 col-sm-7 col-md-6 col-lg-5 col-xl-4  p-2" id="contact-title">
                        contact me
                    </h4>

                </div>
                <div className="text-center col-10 mt-5 m-auto row justify-content-center">
                    <a href="mailto:tevisreilly1@gmail.com?cc=tevisreilly1@hotmail.com" className="rounded-3 text-center col-10 col-md-8 col-lg-5 col-xl-5 p-2 m-auto" id="email" style={{
                        textDecoration: 'none',
                        color: 'black',

                    }}>
                        tevisreilly1@gmail.com
                    </a>

                </div>
                <Form className="col-12 col-sm-10 col-lg-8 rounded-3 text-start mx-auto my-5" id="contact-form-container">
                    <Form.Group className="pt-2 pb-5 px-2" action="mailto:tevisreilly1@gmail.com" method="GET">
                        <Form.Label className="p-2" htmlFor="sender-name">
                            Your name:
                        </Form.Label>
                        <Form.Control type="email" className="w-100 px-2 py-1" name="sender-name" id="sender-name" required
                            placeholder="John Doe..." />
                        <Form.Label className="p-2" htmlFor="message-content">
                            Your Message:
                        </Form.Label>
                        <Form.Control as="textarea" className="w-100 p-2" name="message-content" id="message-content" cols="30" rows="5"
                            placeholder="This website is awesome!"></Form.Control>
                        <Button className="btn btn-dark">Send Message</Button>
                    </Form.Group>

                </Form>

            </section>
        </Fade>
    )
}

export default ContactForm