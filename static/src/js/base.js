const Header = () => {
    return (
        <a href="/" className="heading">
            <h1>Dream State</h1>
        </a>
    );
};

const Link = ({href, text, currentPage}) => {
    let textComp;

    if (href === '/' + currentPage) {
        textComp = (<strong>{text}</strong>);
    } else {
        textComp = (<em>{text}</em>);
    }
    return (
        <a href={href}
            className="nav-link">
            {textComp}
        </a>
    );
};

const Nav = () => {
    return (
        <div id="nav">
            <ul>
                <li><Link text="California 2020 110"
                    href="/california2020-110"
                    currentPage={currentPage} /></li>
                <li><Link text="California 2019 110"
                    href="/california2019-110"
                    currentPage={currentPage} /></li>
                <li><Link text="Paris 2018 35mm"
                    href="/paris35"
                    currentPage={currentPage} /></li>
                <li><Link text="Paris 2018 110"
                    href="/paris110"
                    currentPage={currentPage} /></li>
                <li><Link text="California 2018 35mm"
                    href="/california2018"
                    currentPage={currentPage} /></li>
                <li><Link text="California 2018 110"
                    href="/california2018-110"
                    currentPage={currentPage} /></li>
                <li><Link text="2017"
                    href="/photos2017"
                    currentPage={currentPage} /></li>
                <li><Link text="Disposables 2016"
                    href="/photos2016"
                    currentPage={currentPage} /></li>
                <li><Link text="Sketchbook"
                    href="/sketchbook"
                    currentPage={currentPage} /></li>
                <li><Link text="Reading Log"
                    href="/reading-log"
                    currentPage={currentPage} /></li>
                <li><Link text="About"
                    href="/about"
                    currentPage={currentPage} /></li>
            </ul>
        </div>
    );
};

ReactDOM.render(
    <Header />,
    document.getElementById('heading-container')
);

const currentPage = document.getElementById('current-page').text;

ReactDOM.render(
    <Nav currentPage={currentPage} />,
    document.getElementById('nav-container')
);
