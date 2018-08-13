const NUM_IMGS = 17;

const captions = {
}

const Images = React.createClass({
    render: function() {
        const content = [];
        for (var i = 0; i < NUM_IMGS; i++) {
            content.push(
                <img src={`static/images/2017/img2017-${i}.jpg`}
                    className="xlarge" />
            )
            if (i in captions){
                content.push(<div class="caption">{captions[i]}</div>)
            }
        }

        return (
            <div className="image-container">
                <p><span>Mostly California, some Nevada during Life is Beautiful 2017.</span></p>
                {content}
            </div>
        )
        }
});

ReactDOM.render(
    <Images />,
    document.getElementById('content-container')
);
