const NUM_IMGS = 26;

const captions = {
    17: "A study of Magritte's \"The Listening Room\"",
    19: "Drinks had in Paris, June 2018"
}

const Images = () => {
    const content = [];
    for (let i = NUM_IMGS - 1; i >= 0; i--) {
        content.push(
            <img src={`static/images/sketchbook/sketch${i}.jpg`}
                className="large" />
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
