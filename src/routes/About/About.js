import { marked } from 'marked';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';

function About() {
    const [status, setStatus] = useState({
        isFailed: false,
        error: 'ok',
    });

    const [markdown, setMarkdown] = useState();

    useEffect(() => {
        const readmePath = 'https://raw.githubusercontent.com/Syfleshka/Syfleshka/main/README.md';

        fetch(readmePath)
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                setMarkdown(marked(text));
            })
            .catch((error) => {
                setStatus((prevState) => ({ ...prevState, isFailed: true, error: error }));
            });
    }, [markdown]);

    if (status.isFailed) {
        console.error(status.error);
    }
    return (
        <div className={`main`}>
            <section className={`section`}>
                <h2 className={`header contact__header`}>Hello, my name is Alexandr Denisov</h2>
                {markdown ? <article dangerouslySetInnerHTML={{ __html: markdown }}></article> : <Loader />}
                {status.isFailed ? <p className={`paragraph_text`}>Error. {status.error}</p> : null}
            </section>
        </div>
    );
}

export default About;
