const NUM_IMGS = 41;

const captions = {
}

const Images = React.createClass({
  render: function() {
    const content = [];
    for (var i = 0; i < NUM_IMGS; i++) {
        content.push(<CenterImage src={`static/images/paris-2018-35/paris35-${i}.jpg`} />)
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
