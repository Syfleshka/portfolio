import './Portfolio.scss';
function PortfolioItem({ portfolioItem }) {
    return (
        <div className={`portfolio-list__element`}>
            <h4 className={`portfolio-element__header h4`}>
                <a className={`href_silent`} href={portfolioItem.html_url} target={`_blank`}>
                    {portfolioItem.name}
                </a>
            </h4>
            <p className={`portfolio-element__description`}>{portfolioItem.description}</p>
            <hr className={`portfolio-element__separator separator`} />
            <p className={`portfolio-element__links paragraph_text`}>
                {portfolioItem.homepage ? (
                    <>
                        <a href={portfolioItem.homepage} target={`_blank`} className={`href_text`}>
                            Homepage
                        </a>
                        <br />
                    </>
                ) : (
                    <br />
                )}
                <a href={portfolioItem.html_url} target={`_blank`} className={`href_text`}>
                    Github
                </a>
            </p>
            <p className={`portfolio-element__language`}>
                Main language: <span className={`program-language`}>{portfolioItem.language}</span>
            </p>
        </div>
    );
}
export default PortfolioItem;
