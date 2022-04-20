import './Contact.scss'
import {Component} from "react";
import {Form} from "../../components/Form/Form";

class Contact extends Component {
    render() {
        return (
            <div className={`main`}>
                <section className={`section contact`}>
                    <h2 className={`header contact__header`}>
                        Feel free to contact me through:
                    </h2>
                    <p className={`paragraph contact__paragraph paragraph_text`}>
                        Email: <a className={`href_text`}
                                  href={`mailto:alexandr.d@yoursystem.ru`}>alexandr.d@yoursystem.ru</a>
                        <br/>
                        Telegram: <a className={`href_text`} href={`https://t.me/Syfleshek`}>https://t.me/Syfleshek</a>
                    </p>
                </section>
                <section className={`section`}>
                    <h3 className={`header form__header`}>
                        Or you can use contact form
                    </h3>
                    <Form />
                </section>
            </div>
        );
    }
}

export default Contact;
