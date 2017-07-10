const PageContent = React.createClass({
  render: function() {
    const olStyle = {
      listStyleType: 'none'
    };

    const hStyle = {
      display: 'inline-block',
      overflow: 'hidden',
      letterSpacing: '0.4em',
      backgroundColor: 'white'
    }

    return (
      <div style={textStyle}>
        <h2 style={hStyle}><em>Currently Reading</em></h2>
        <ol style={olStyle}>
          <li><Link text="Foundation" desc=" - Isaac Asimov" href="https://www.goodreads.com/book/show/29579.Foundation" /></li>
          <li><Link text="Tech Against Trump" desc=" - Logic Magazine" href="https://logicmag.io/tech-against-trump/" /></li>
          <li><Link text="NeuroTribes: The Legacy of Autism and the Future of Neurodiversity" desc=" - Steve Silberman" href="https://www.goodreads.com/book/show/22514020-neurotribes" /></li>

        </ol>
        <h2 style={hStyle}><em>2017</em></h2>
        <ol style={olStyle}>
          <li><Link text="We Should All Be Feminists" desc=" - Chiminanda Ngozi Adichie" href="http://everydayfeminism.com/2014/09/we-should-all-be-feminists/" /></li>
          <li><Link text="Paper Girls Vol 2" href="https://www.goodreads.com/book/show/31338724-paper-girls-vol-2" /></li>
          <li><Link text="Digital Speech and Democratic Culture: A Theory of Freedom of Expression for the Information Society" desc=" - Jack M. Balkin" href="http://www.nyulawreview.org/issues/volume-79-number-1/digital-speech-and-democratic-culture" /></li>
          <li><Link text="Patience" desc=" - Daniel Clowes" href="https://www.goodreads.com/book/show/25652706-patience" /></li>
          <li><Link text="Black Panther #1" desc=" - Ta-Nehisi Coates" href="https://www.goodreads.com/book/show/29812803-black-panther-1" /></li>
          <li><Link text="The Bluest Eye" desc=" - Toni Morrison" href="https://www.goodreads.com/book/show/11337.The_Bluest_Eye" /></li>
          <li><Link text="Shelter" desc=" - Jung Yun" href="https://www.goodreads.com/book/show/25658832-shelter" /></li>
          <li><Link text="Tell Me How It Ends: An Essay in 40 Questions" desc=" - Valeria Luiselli" href="https://www.goodreads.com/book/show/33608721-tell-me-how-it-ends" /></li>
          <li><p>Fresh off the Boat - Free Comic Book Day</p></li>
          <li><p>Ka #1 - Marvel and Cirque du Soleil</p></li>
          <li><Link text="The Sandmeyer Reaction" desc=" - Michael Chabon" href="https://www.nytimes.com/2016/11/18/books/review/michael-chabon-sandmeyer-reaction-short-story.html?_r=0"/></li>
          <li><Link text="The Circle" desc=" - Dave Eggers" href="https://www.goodreads.com/book/show/18302455-the-circle" /></li>
          <li><Link text="Do Androids Dream of Electric Sheep?" desc=" - Philip K. Dick" href="https://www.goodreads.com/book/show/7082.Do_Androids_Dream_of_Electric_Sheep_" /></li>
          <li><Link text="The Three-Body Problem" desc=" - Liu Cixin" href="https://www.goodreads.com/book/show/20518872-the-three-body-problem" /></li>
          <li><Link text="The Weight of Memories" desc=" - Liu Cixin" href="http://www.tor.com/2016/08/17/the-weight-of-memories/" /></li>
          <li><Link text="Your Black Friend" desc=" - Ben Passmore" href="https://www.goodreads.com/book/show/32825614-your-black-friend" /></li>
          <li><Link text="Ms. Marvel Vol 1" href="https://www.goodreads.com/book/show/20898019-ms-marvel-vol-1" /></li>
          <li><Link text="The Curious Incident of the Dog in the Night-Time" desc=" - Mark Haddon" href="https://www.goodreads.com/book/show/1618.The_Curious_Incident_of_the_Dog_in_the_Night_Time" /></li>
          <li><Link text="Bitch Planet Vol 2" href="https://www.goodreads.com/book/show/29972029-bitch-planet-vol-2" /></li>
        </ol>
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
        <a href={this.props.href} target="_blank" style={linkStyle}><em>{this.props.text}</em></a><span style={textStyle}>{this.props.desc}</span>
      </p>
    );
  }
});

ReactDOM.render(
  <PageContent />,
  document.getElementById('content-container')
);
