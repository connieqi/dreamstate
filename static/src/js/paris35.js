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

        return (
            <div className="image-container">
                {content}
            </div>
        )
        }
});

const CenterImage = React.createClass({
    render: function() {
        return (
            <img src={this.props.src} className="large" />
        )
    }
});

ReactDOM.render(
    <Images />,
    document.getElementById('content-container')
);
