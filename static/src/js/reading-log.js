const ExternalLink = ({text, desc, href}) => {
    return (
        <p>
            <a href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Opens new tab">
                <em>{text}</em>
            </a>
            <span>{desc}</span>
        </p>
    );
};

const Book = ({title, author, goodreadsId, url}) => {
    let href;

    if (goodreadsId) {
        href = `https://www.goodreads.com/book/show/${goodreadsId}`;
    } else if (url){
        href = url;
    }

    return (
        <li>
            <ExternalLink text={title}
                desc={author ? ` - ${author}` : ''}
                href={href}
                />
        </li>
    );
};

const Section = ({sectionName, books}) => {
    let bookComps = [];

    if (books) {
        bookComps = books.map(b => {
            return (
                <Book title={b.title}
                    key={`${b.title} ${b.author}`}
                    author={b.author}
                    goodreadsId={b.goodreadsId}
                    url={b.url} />
            );
        });
    }

    return (
        <div className="section">
            <h2><em>{sectionName}</em></h2>
            <ol>{bookComps}</ol>
        </div>
    );
};

class PageContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    getData() {
        fetch('/reading-log/ajax')
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                this.setState({data: jsonData}, () => {})
            });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const {data} = this.state;
        let sections = [];

        if (data) {
            sections = data.map(s => {
                return (
                    <Section sectionName={s.sectionName}
                        key={s.sectionName}
                        books={s.books} />
                );
            });
        }

        return (<div className="reading-log">{sections}</div>);
    }
}

ReactDOM.render(
    <PageContent />,
    document.getElementById('content-container')
);
