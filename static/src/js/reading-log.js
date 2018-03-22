const linkStyle = {
    color: 'black',
    backgroundColor: 'white',
    fontSize: '16px',
    lineHeight: '2rem',
};

const textStyle = {
    backgroundColor: 'white',
    lineHeight: '2rem'
};

const contentStyle = {
    backgroundColor: 'white',
    width: '650px',
    paddingRight: '20px',
    paddingBottom: '10px',
    marginBottom: '30px'
};

const olStyle = {
    textAlign: 'left'
};

const hStyle = {
    display: 'inline-block',
    overflow: 'hidden',
    letterSpacing: '0.4em',
    textTransform: 'uppercase',
    backgroundColor: 'white'
};

const Link = ({text, desc, href}) => {
    return (
        <p>
            <a href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}>
                <em>{text}</em>
            </a>
            <span style={textStyle}>{desc}</span>
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
            <Link text={title}
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
        <div style={contentStyle}>
            <h2 style={hStyle}><em>{sectionName}</em></h2>
            <ol style={olStyle}>
                {bookComps}
            </ol>
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

        return (<div>{sections}</div>);
    }
}

ReactDOM.render(
    <PageContent />,
    document.getElementById('content-container')
);
