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

        return (
            <div className="image-container">
                <p><span>
                    Taken with a Lomography Diana Baby 110 camera / Tiger 200 film
                </span></p>
                {content}
            </div>
        )
    }
});

const CenterImage = React.createClass({
    render: function() {
        return (
          <img src={this.props.src} className="med" />
        )
    }
});

ReactDOM.render(
    <Images />,
    document.getElementById('content-container')
);
