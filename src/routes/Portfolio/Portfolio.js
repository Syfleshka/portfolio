import './Portfolio.scss';
import PortfolioItems from './PortfolioItems';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';

function Portfolio() {
    const [status, setStatus] = useState({
        isFailed: false,
        error: 'ok',
    });
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchRepos = fetch(`https://api.github.com/users/Syfleshka/repos`);
            const fetchStarredRepos = fetch(`https://api.github.com/users/Syfleshka/starred`);
            const [myRepos, starredRepos] = await Promise.all([fetchRepos, fetchStarredRepos])
                .then((responses) => {
                    if (responses.every((response) => response.status === 200)) {
                        return responses;
                    }
                })
                .then((responses) => {
                    return Promise.all(responses.map((response) => response.json()));
                });

            const starredReposId = starredRepos.map((item) => item.id);
            const myStarredRepos = myRepos.filter((rep) => starredReposId.includes(rep.id));

            setPortfolio([...myStarredRepos]);
        };
        fetchData().catch((error) => {
            setStatus((prevState) => ({ ...prevState, isFailed: true, error: error }));
        });
    }, []);

    if (status.error !== 'ok') {
        console.error(status.error);
    }

    return (
        <div className={`main`}>
            <section className={`section portfolio`}>
                <h2 className={`header contact__header`}>My favorite projects</h2>
                {portfolio.length ? <PortfolioItems portfolio={portfolio} /> : <Loader />}
                <div className={`portfolio-link`}>
                    <a
                        className={`input-button button_half center`}
                        href={`https://github.com/Syfleshka?tab=repositories`}
                        target={`_blank`}
                    >
                        All projects
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
