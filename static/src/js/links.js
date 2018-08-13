const PageContent = React.createClass({
    render: function() {
        return (
          <div>
            <Link text="https://www.shortoftheweek.com/"
                href="https://www.shortoftheweek.com/"
                desc=" &mdash; short films curated by Vimeo"/>
            <Link text="Astronomy Picture of the Day"
                href="http://apod.nasa.gov/apod/astropix.html"
                desc=" (NASA)" />
            <Link text="http://brutalistwebsites.com/"
                href="http://brutalistwebsites.com/"
                desc="" />
            <Link text="http://cyq1.tumblr.com" href="http://cyq1.tumblr.com"
                desc=" &mdash; Some of my older photos from 2016-2017"/>
          </div>
        );
    }
})

const Link = React.createClass({
    render: function() {
        return (
            <p>
                <a href={this.props.href}
                    target="_blank"
                    rel="noopener noreferrer">
                        <em>{this.props.text}</em>
                    </a>
                    <span>{this.props.desc}</span>
            </p>
        );
    }
});

ReactDOM.render(
    <PageContent />,
    document.getElementById('content-container')
);
