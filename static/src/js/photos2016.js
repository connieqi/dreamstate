const NUM_IMGS = 21;

const captions = {
}

const Images = () => {
    const content = [];
    for (let i = 0; i < NUM_IMGS; i++) {
        content.push(
            <img src={`static/images/2016/img2016-${i}.jpg`}
                className="xlarge" />
        )
        if (i in captions){
            content.push(<div class="caption">{captions[i]}</div>)
        }
    }

    return (
        <div className="image-container">
            <p><span>Disposable camera snaps from 2016: Portland, Bay Area and Yosemite</span></p>
            {content}
        </div>
    )
};

ReactDOM.render(
    <Images />,
    document.getElementById('content-container')
);
