const PageContent = () => {
    return (
        <div>
            <img src="static/images/self.jpg" className="xsmall" />
            <div className="section about-section">
                <p><span>
                    This is my place to share some of my creations with you.
                </span></p>
                <img src="static/images/favicon-32x32.png" width="16" />
                <p><span>Made by Connie Qi</span></p>
                <p><span>Built with ES6, React, Python & Flask</span></p>
                <p>
                    <span>Icons from</span>
                    {' '}
                    <a href="https://icons8.com/"
                        target="_blank"
                        rel="noopener noreferrer">Icons8</a>
                </p>
            </div>
        </div>
    );
};

ReactDOM.render(
    <PageContent />,
    document.getElementById('content-container')
);
