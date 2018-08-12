// TODO: set up require.js
// import Link from "page"

const PageContent = React.createClass({
  render: function() {
    return (
      <div>
        <Link text="icons by Icons8"
            href="https://icons8.com/"/>
      </div>
    );
  }
})

const linkStyle = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '16px',
  lineHeight: '2rem',
};

const textStyle = {
  backgroundColor: 'white'
}

const Link = React.createClass({
  render: function() {
    return (
      <p>
        <a href={this.props.href} target="_blank" style={linkStyle}><em>{this.props.text}</em></a><span style={textStyle}>{this.props.desc}</span>
      </p>
    );
  }
});

ReactDOM.render(
  <PageContent />,
  document.getElementById('content-container')
);
