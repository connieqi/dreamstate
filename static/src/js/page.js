const Page = React.createClass({
    render: function() {
        const style = {
            
        };

        return (
            <div id="page-wrapper">
                <Header />
                <Nav />
            </div>
        );
    }
});

const Header = React.createClass({
    render: function() {
        const style = {
            margin: "10px 0",
            letterSpacing: '0.75em',
            textTransform: 'uppercase'
        };

        return (
            <div id="header" style={style}><em>
                C&#9786;nnie's dre&#10032;m st&#10032;te... c&#9786;ming s&#9786;&#9786;n.............
                </em></div>
        );
    }
});

const Nav = React.createClass({
    render: function() {
        const ulStyle = {
            listStyleType: 'none'
        };

        return (
            <div id="nav">
                <ul style={ulStyle}>

                </ul>
            </div>
        );
    }
});

const Link = React.createClass({
    render: function() {
        const style = {
            color: 'black',
            listStyleType: 'none'
        };

        return (
            <li><a href="#" style={style}>{this.props.text}</a></li>
        );
    }
});

ReactDOM.render(
    <Page />,
    document.getElementById('heading-container')
);
