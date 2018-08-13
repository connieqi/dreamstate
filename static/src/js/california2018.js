const NUM_IMGS = 26;

const captions = {
}

const Images = React.createClass({
    render: function() {
        const content = [];
        for (var i = 0; i < NUM_IMGS; i++) {
            content.push(
                <img src={`static/images/california-2018/ca2018-${i}.jpg`}
                    className="xlarge" />
            )
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

ReactDOM.render(
    <Images />,
    document.getElementById('content-container')
);
