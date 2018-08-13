const NUM_IMGS = 14;

const captions = {
}

const Images = () => {
    const content = [];
    for (let i = 0; i < NUM_IMGS; i++) {
        content.push(
            <img src={`static/images/paris-2018-110/paris110-${i}.jpg`}
                className="med"/>
        )
        if (i in captions){
            content.push(<div class="caption">{captions[i]}</div>)
        }
    }

    return (
        <div className="image-container">
            <p><span>
                Taken with a Diana Baby 110 camera & Tiger 200 film
            </span></p>
            {content}
        </div>
    )
};

ReactDOM.render(
    <Images />,
    document.getElementById('content-container')
);
