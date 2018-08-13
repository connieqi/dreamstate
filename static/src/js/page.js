const Header = React.createClass({
    render: function() {
        return (
            <a href="/" className="heading">
                <h1>Dream State</h1>
            </a>
        );
    }
});

const Link = React.createClass({
    render: function() {
        return (
            <a href={this.props.href}
                className="nav-link">
                <em>{this.props.text}</em>
            </a>
        );
    }
});

const Nav = React.createClass({
    render: function() {
        return (
            <div id="nav">
                <ul>
                    <li><Link text="Paris 2018 35mm" href="/paris35" /></li>
                    <li><Link text="Paris 2018 110" href="/paris110" /></li>
                    <li><Link text="California 2018" href="/california2018" /></li>
                    <li><Link text="2016" href="/photos2016" /></li>
                    <li><Link text="Sketchbook" href="/sketchbook" /></li>
                    <li><Link text="Reading Log" href="/reading-log" /></li>
                    <li><Link text="Links" href="/links" /></li>
                    <li><Link text="About" href="/about" /></li>
                </ul>
            </div>
        );
    }
});

ReactDOM.render(
    <Header />,
    document.getElementById('heading-container')
);
ReactDOM.render(
    <Nav />,
    document.getElementById('nav-container')
);
