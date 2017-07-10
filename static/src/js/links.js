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

const PageContent = React.createClass({
    render: function() {
        return (
            <div>
                <Link text="http://labs.echonest.com/3dServer/maze.html" href="http://labs.echonest.com/3dServer/maze.html" desc=" &mdash; trippy, check this out"/>
                <Link text="https://www.shortoftheweek.com/" href="https://www.shortoftheweek.com/" desc=" &mdash; new short films curated by Vimeo"/>
                <Link text="Astronomy Picture of the Day" href="http://apod.nasa.gov/apod/astropix.html" desc="" />
            </div>
        );
    }
})

const linkStyle = {
    color: 'black',
    backgroundColor: 'white',
    fontSize: '16px',
    lineHeight: '2rem',
};

const textStyle = {
    backgroundColor: 'white'
}

const Link = React.createClass({
    render: function() {
        return (
            <p>
                <a href={this.props.href} style={linkStyle}><em>{this.props.text}</em></a><span style={textStyle}>{this.props.desc}</span>
            </p>
        );
    }
});

ReactDOM.render(
    <PageContent />,
    document.getElementById('content-container')
);
