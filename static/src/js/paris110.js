const NUM_IMGS = 14;

const captions = {
}

const Images = React.createClass({
  render: function() {
    const content = [];
    for (var i = 0; i < NUM_IMGS; i++) {
        content.push(<CenterImage src={`static/images/paris-2018-110/paris110-${i}.jpg`} />)
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
        <p><span>Taken with a Lomography Diana Baby 110 camera / Tiger 200 film
        </span></p>
        {content}
      </div>
    )
  }
});

const CenterImage = React.createClass({
  render: function() {
    const style = {
      maxWidth: '600px',
      maxHeight: '600px',
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
