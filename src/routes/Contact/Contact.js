import './contact.scss'

function Contact() {


    return (
        <section className={`contact`}>
            <h1 className={`contact__header`}>
                Feel free to contact me through:
            </h1>
            <p className={`contact__paragraph`}>
                Email: <a className={`href-text`} href={`mailto:alexandr.d@yoursystem.ru`}>alexandr.d@yoursystem.ru</a>
                <br />
                Telegram: <a className={`href-text`} href={`https://t.me/Syfleshek`}>https://t.me/Syfleshek</a>
            </p>
        </section>
    );
}

export default Contact;
