const CenterImage = React.createClass({
    render: function() {
        const style = {
            width: '500px',
            border: '2px solid Blue',
        }
        return (
            <img src="static/images/mtns.jpg" style={style}></img>
        )
    }
});

ReactDOM.render(
    <CenterImage />,
    document.getElementById('content-container')
);
