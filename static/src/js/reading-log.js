const PageContent = React.createClass({
  render: function() {
    const contentStyle = {
      backgroundColor: 'white',
      width: '650px',
      paddingRight: '20px',
      paddingBottom: '10px',
      marginBottom: '30px'
    };
    const olStyle = {
      textAlign: 'left'
    };
    const hStyle = {
      display: 'inline-block',
      overflow: 'hidden',
      letterSpacing: '0.4em',
      backgroundColor: 'white'
    };

    return (
      <div>
      <div style={contentStyle}>
        <h2 style={hStyle}><em>Currently Reading</em></h2>
        <ol style={olStyle}>
          <li><Link text="Salt" desc=" - Nayyirah Waheed" href="https://www.goodreads.com/book/show/18585282-salt" /></li>
          <li><Link text="Sister Outsider" desc=" - Audre Lorde" href="https://www.goodreads.com/book/show/32951.Sister_Outsider" /></li>
          <li><Link text="A Tale for the Time Being" desc=" - Ruth Ozeki" href="https://www.goodreads.com/book/show/15811545-a-tale-for-the-time-being" /></li>
          <li><Link text="G&ouml;del, Escher, Bach: An Eternal Golden Braid" desc=" - Douglas R. Hofstadter" href="https://www.goodreads.com/book/show/24113.G_del_Escher_Bach" /></li>
        </ol>
      </div>
      <div style={contentStyle}>
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
          <li><p><span style={textStyle}>Fresh off the Boat - Free Comic Book Day</span></p></li>
          <li><p><span style={textStyle}>Ka #1 - Marvel and Cirque du Soleil</span></p></li>
          <li><Link text="The Sandmeyer Reaction" desc=" - Michael Chabon" href="https://www.nytimes.com/2016/11/18/books/review/michael-chabon-sandmeyer-reaction-short-story.html?_r=0"/></li>
          <li><Link text="The Circle" desc=" - Dave Eggers" href="https://www.goodreads.com/book/show/18302455-the-circle" /></li>
          <li><Link text="Do Androids Dream of Electric Sheep?" desc=" - Philip K. Dick" href="https://www.goodreads.com/book/show/7082.Do_Androids_Dream_of_Electric_Sheep_" /></li>
          <li><Link text="The Three-Body Problem" desc=" - Liu Cixin" href="https://www.goodreads.com/book/show/20518872-the-three-body-problem" /></li>
          <li><Link text="The Weight of Memories" desc=" - Liu Cixin" href="http://www.tor.com/2016/08/17/the-weight-of-memories/" /></li>
          <li><Link text="Your Black Friend" desc=" - Ben Passmore" href="https://www.goodreads.com/book/show/32825614-your-black-friend" /></li>
          <li><Link text="Ms. Marvel Vol 1" href="https://www.goodreads.com/book/show/20898019-ms-marvel-vol-1" /></li>
          <li><Link text="The Curious Incident of the Dog in the Night-Time" desc=" - Mark Haddon" href="https://www.goodreads.com/book/show/1618.The_Curious_Incident_of_the_Dog_in_the_Night_Time" /></li>
          <li><Link text="Bitch Planet Vol 2" href="https://www.goodreads.com/book/show/29972029-bitch-planet-vol-2" /></li>
          <li><Link text="Foundation" desc=" - Isaac Asimov" href="https://www.goodreads.com/book/show/29579.Foundation" /></li>
          <li><Link text="The Man in the High Castle" desc=" - Philip K. Dick" href="https://www.goodreads.com/book/show/216363.The_Man_in_the_High_Castle" /></li>
          <li><Link text="The Martian Obelisk" desc=" - Linda Nagata" href="http://www.tor.com/2017/07/19/the-martian-obelisk/" /></li>
          <li><Link text="Wild: From Lost to Found on the Pacific Crest Trail" desc=" - Cheryl Strayed" href="https://www.goodreads.com/book/show/12262741-wild" /></li>
          <li><Link text="Sky Burial: An Epic Love Story of Tibet" desc=" - Xinran" href="https://www.goodreads.com/book/show/183845.Sky_Burial" /></li>
          <li><Link text="The Dark Forest" desc=" - Cixin Liu" href="https://www.goodreads.com/book/show/23168817-the-dark-forest" /></li>
          <li><Link text="Hillbilly Elegy" desc=" - J.D. Vance" href="https://www.goodreads.com/book/show/27161156-hillbilly-elegy" /></li>
          <li><Link text="Comics for Choice" desc="" href="http://comicsforchoice.com/" /></li>
          <li><Link text="Milk and Honey" desc=" - Rupi Kaur" href="https://www.goodreads.com/book/show/23513349-milk-and-honey" /></li>
          <li><Link text="The Sun and Her Flowers" desc=" - Rupi Kaur" href="https://www.goodreads.com/book/show/35606560-the-sun-and-her-flowers" /></li>
        </ol>
      </div>
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
  backgroundColor: 'white',
  lineHeight: '2rem'
}

const Link = React.createClass({
  render: function() {
    return (
      <p>
        <a href={this.props.href} target="_blank" rel="noopener noreferrer" style={linkStyle}><em>{this.props.text}</em></a><span style={textStyle}>{this.props.desc}</span>
      </p>
    );
  }
});

ReactDOM.render(
  <PageContent />,
  document.getElementById('content-container')
);
