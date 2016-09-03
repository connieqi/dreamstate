const CenterImage = React.createClass({
    render: function() {
        const style = {
            width: "500px"
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
