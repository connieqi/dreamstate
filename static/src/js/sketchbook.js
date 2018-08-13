const NUM_IMGS = 20;

const captions = {
    17: "A study of Magritte's \"The Listening Room\"",
    19: "Drinks had in Paris, June 2018"
}

const Images = React.createClass({
  render: function() {
    const content = [];
    for (var i = NUM_IMGS - 1; i >= 0; i--) {
        content.push(<CenterImage src={`static/images/sketchbook/sketch${i}.jpg`} />)
        if (i in captions){
            content.push(<div class="caption">{captions[i]}</div>)
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
