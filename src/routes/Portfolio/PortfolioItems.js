import './Portfolio.scss';
import PortfolioItem from './PortfolioItem';
function PortfolioItems({ portfolio }) {
    console.log(portfolio);
    return (
        <div className={`portfolio-list`}>
            {portfolio.map((elem, id) => (
                <PortfolioItem portfolioItem={elem} key={id} />
            ))}
        </div>
    );
}
export default PortfolioItems;
