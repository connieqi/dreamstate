const PageContent = () => {
    return (
      <div>
        <h2>Some of my favorite things on the internet</h2>
        <ExternalLink text="https://www.shortoftheweek.com/"
            href="https://www.shortoftheweek.com/"
            desc=" &mdash; short films curated by Vimeo"/>
        <ExternalLink text="Astronomy Picture of the Day"
            href="http://apod.nasa.gov/apod/astropix.html"
            desc=" (NASA)" />
        <ExternalLink text="http://brutalistwebsites.com/"
            href="http://brutalistwebsites.com/"
            desc="" />
        <br />
        <h2>Other</h2>
        <ExternalLink text="http://cyq1.tumblr.com" href="http://cyq1.tumblr.com"
            desc=" &mdash; My older photos from 2016-2017"/>
      </div>
    );
};

const ExternalLink = ({text, desc, href}) => {
    return (
        <p>
            <a href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Opens new tab">
                <em>{text}</em>
            </a>
            <span>{desc}</span>
        </p>
    );
};

ReactDOM.render(
    <PageContent />,
    document.getElementById('content-container')
);
