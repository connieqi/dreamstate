const PageContent = React.createClass({
    render: function() {
        return (
            <div>
                <CenterImage src="static/images/peach-four-color.png"/>
                <div style={{backgroundColor: 'white', width: '600px', margin: "0 auto"}}>
                <p>A fun design that I made into stickers. It started as a bunch of tiny peaches drawn in sharpie on sticker paper, I put them on everything, and they eventually melted off. This is me making them more permanent.</p>
                </div>
            </div>
        )
    }
})

const CenterImage = React.createClass({
    render: function() {
        const style = {
            width: '500px',
            border: '2px solid Blue',
        }
        return (
            <img src={this.props.src} style={style}></img>
        )
    }
});

ReactDOM.render(
    <PageContent />,
    document.getElementById('content-container')
);
