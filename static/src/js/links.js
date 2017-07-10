// TODO: set up require.js
// import Link from "page"

const PageContent = React.createClass({
  render: function() {
    return (
      <div>
        <Link text="https://www.shortoftheweek.com/" href="https://www.shortoftheweek.com/" desc=" &mdash; new short films curated by Vimeo"/>
        <Link text="Astronomy Picture of the Day" href="http://apod.nasa.gov/apod/astropix.html" desc="" />
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
        <a href={this.props.href} style={linkStyle}><em>{this.props.text}</em></a><span style={textStyle}>{this.props.desc}</span>
      </p>
    );
  }
});

ReactDOM.render(
  <PageContent />,
  document.getElementById('content-container')
);
