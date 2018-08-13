const LandingPage = React.createClass({
  render: function() {
    return (
        <div>
            <img src="static/images/000483310006.jpg"
                className="small" />
        </div>
    )
  }
});

ReactDOM.render(
    <LandingPage />,
    document.getElementById('content-container')
);
