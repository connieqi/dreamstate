// import Link from "page"

// const CenterImage = React.createClass({
//     render: function() {
//         const style = {
//             width: '500px',
//             border: '2px solid Blue',
//         }
//         return (
//             <img src="static/images/mtns.jpg" style={style}></img>
//         )
//     }
// });

const linkStyle = {
    color: 'black',
    backgroundColor: 'white',
    fontSize: '16px',
    lineHeight: '2rem',
};

const Link = React.createClass({
    render: function() {
        return (
            <a href={this.props.href} style={linkStyle}><em>{this.props.text}</em></a>
        );
    }
});

ReactDOM.render(
    <Link text="http://labs.echonest.com/3dServer/maze.html" href="http://labs.echonest.com/3dServer/maze.html" />,
    document.getElementById('content-container')
);
