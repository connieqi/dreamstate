const LandingPage = React.createClass({
  render: function() {
    return (
      <div>
        <CenterImage src="static/images/mtns.jpg" />

      </div>
    )
  }
});

const CenterImage = React.createClass({
  render: function() {
    const style = {
      width: '500px',
      border: '2px solid Blue',
    }
    return (
      <img src={this.props.src} style={style}></img>
    )
  }
});

ReactDOM.render(
  <LandingPage />,
  document.getElementById('content-container')
);
