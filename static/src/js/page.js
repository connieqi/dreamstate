const h1Style = {
  backgroundColor: 'white'
};

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
        <h1 style={h1Style}>Dream State</h1>
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
          <li><Link text="Reading Log" href="/reading-log" /></li>
          <li><Link text="Photos" href="https://cyq1.tumblr.com" /></li>
          <li><Link text="Links" href="/links" /></li>
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
