const Header = React.createClass({
  render: function() {
    const style = {
      margin: '10px auto 40px',
      display: 'inline-block',
      overflow: 'hidden',
      fontSize: '24px',
      letterSpacing: '0.75em',
      textTransform: 'uppercase',
      backgroundColor: 'white'
    };

    return (
      <a href="/" style={{color: 'black'}}>
        <h1 id="header" style={style}><em>Dream State 0.1</em></h1>
      </a>
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
          <li><Link text="Digital" href="/digital" /></li>
          <li><Link text="Photos" href="https://cyq1.tumblr.com" /></li>
          <li><Link text="Reading Log" href="/reading-log" /></li>
          <li><Link text="Links" href="/links" /></li>
        </ul>
      </div>
    );

    // stuff for later
    // <Link text="Color Palette Fun" href="#" />
    // <Link text="Garbage" href="#" />
  }
});

const linkStyle = {
  color: 'black',
  backgroundColor: 'white',
  listStyleType: 'none',
  fontSize: '16px',
  letterSpacing: '0.75em',
  textTransform: 'uppercase',
  lineHeight: '2rem',
};

const Link = React.createClass({
  render: function() {
      return (
          <a href={this.props.href} style={linkStyle}><em>{this.props.text}</em></a>
      );
  }
});

const ExternalLink = React.createClass({
  render: function() {
    return (
      <a href={this.props.href} target="_blank" aria-label="opens new tab" style={linkStyle}><em>{this.props.text}</em></a>
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
