const NUM_IMGS = 41;

const captions = {
}

const Images = () => {
    const content = [];
    for (let i = 0; i < NUM_IMGS; i++) {
        content.push(
            <img src={`static/images/paris-2018-35/paris35-${i}.jpg`}
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
};

ReactDOM.render(
    <Images />,
    document.getElementById('content-container')
);
