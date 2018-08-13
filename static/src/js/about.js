const PageContent = React.createClass({
    render: function() {
        return (
            <div>
                <p>
                    <span>Pizza icon from</span>
                    {' '}
                    <a href="https://icons8.com/"
                        target="_blank"
                        rel="noopener noreferrer">Icons8</a>
                </p>
            </div>
        );
    }
});

ReactDOM.render(
    <PageContent />,
    document.getElementById('content-container')
);
