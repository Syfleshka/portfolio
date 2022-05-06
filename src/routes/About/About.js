import { marked } from 'marked';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';

function About() {
    const [markdown, setMarkdown] = useState();

    useEffect(() => {
        const readmePath = 'https://raw.githubusercontent.com/Syfleshka/Syfleshka/main/README.md';

        fetch(readmePath)
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                setMarkdown(marked(text));
            });
    }, [markdown]);
    return (
        <div className={`main`}>
            <section className={`section`}>
                <h2 className={`header contact__header`}>Hello, my name is Alexandr Denisov</h2>
                {markdown ? <article dangerouslySetInnerHTML={{ __html: markdown }}></article> : <Loader />}
            </section>
        </div>
    );
}

export default About;
