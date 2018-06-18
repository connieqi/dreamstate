const NUM_SKETCHES = 22;

const Images = React.createClass({
  render: function() {
    const captionStyle = {
        backgroundColor: 'white'
    }

    const content = [];
    for (var i = NUM_SKETCHES - 1; i >= 0; i--) {
        content.push(<CenterImage src={`static/images/sketch${i}.jpg`} />)
        if (i == 21) {
            content.push(<div style={captionStyle}>Drinks had in Paris, June 2018</div>)
        } else if (i == 19) {
            content.push(<div style={captionStyle}>A study of Magritte's "The Listening Room"</div>)
        }
    }

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    return (
      <div style={style}>
        {content}
      </div>
    )
  }
});

const CenterImage = React.createClass({
  render: function() {
    const style = {
      maxWidth: '700px',
      maxHeight: '700px',
      border: '2px solid Blue',
      margin: '10px',
    }
    return (
      <img src={this.props.src} style={style}></img>
    )
  }
});

ReactDOM.render(
  <Images />,
  document.getElementById('content-container')
);
