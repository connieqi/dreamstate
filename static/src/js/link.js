export const Link = React.createClass({
  render: function() {
    return (
      <p>
        <a href={this.props.href} target="_blank" rel="noopener noreferrer" style={linkStyle}><em>{this.props.text}</em></a><span style={textStyle}>{this.props.desc}</span>
      </p>
    );
  }
});