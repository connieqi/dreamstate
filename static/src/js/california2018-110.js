const NUM_IMGS = 10;

const captions = {
}

const Images = () => {
    const content = [];
    for (let i = 0; i < NUM_IMGS; i++) {
        content.push(
            <img src={`static/images/california-2018-110/ca2018-110-${i}.JPG`}
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
