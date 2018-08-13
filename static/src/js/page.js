const Header = React.createClass({
  render: function() {
    const style = {
      margin: '10px auto 32px',
      display: 'inline-block',
      overflow: 'hidden',
      fontSize: '24px',
      letterSpacing: '0.75em',
      textTransform: 'uppercase',
      color: '#66FF00',

    };

    return (
      <a href="/" style={style}>
        <h1>Dream State</h1>
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
          <li><Link text="Sketchbook" href="/sketchbook" /></li>
          <li><Link text="Reading Log" href="/reading-log" /></li>
          <li><Link text="Links" href="/links" /></li>
          <li><Link text="About" href="/about" /></li>
        </ul>
      </div>
    );
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
