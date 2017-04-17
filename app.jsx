// Lets create a data model for all of our players and give them their values
var PLAYERS = [
	{
		name: "Bugs Bunny",
		score: 48,
		id: 1,
	},
	{
		name: "Elmer Fudd",
		score: 35,
		id: 2,
	},
	{
		name: "Daffy Duck",
		score: 42,
		id: 3,
	},
	{
		name: "Porky Pig",
		score: 28,
		id: 4,
	},
	{
		name: "Tweety Bird",
		score: 37,
		id: 5,
	},
];


// Header component - we are extracting to make our applicatoin easier to read
function Header(props) {
	return (
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	);
}
// Header property types
Header.propTypes = {
	title: React.PropTypes.string.isRequired,
};

// Counter component - decompose the player component even further to include the counter component
function Counter(props) {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<div className="counter-score">{props.score}</div>
			<button className="counter-action increment"> + </button>
		</div>
	);
}
// Counter property types
Counter.propTypes = {
	score: React.PropTypes.number.isRequired,
}

// Player component - so we can reuse it multiple times and make our application much more easy to read.  It is essential to break down our main application component into multiple smaller components so we are more organized and things are easier to edit.
function Player(props) {
	return (
		<div className="player">
			<div className="player-name">
				{props.name}
			</div>
			<div className="player-score">
				<Counter score={props.score} />
			</div>
		</div>
	);
}
// Player property types
Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired,
}

// Application component - this will be comprised of our smaller components that we've already composed.  It is much more organized to have smaller high level components within the application rather than one large beefy component with so much going on within it.  Because we have decomposed the application into smaller components, we can edit those individually later on down the road and it will be much easier to read.
function Application(props) {
	// We will use instances of our Header component, and Player component.  We will iterate over our array of players using the map() method, which takes a function.  The argument for our function is what we use to draw the data from each index of our array.  This is how we can loop over our data model PLAYERS.  We return it as an instance of our Player component and map each key/value pair for each one.  The 'key' property is required so the loop knows where it is within the array.
	return (
		<div className="scoreboard">
			<Header title={props.title} />

			<div className="players">
				{props.players.map(function(player){
					return <Player name={player.name} score={player.score} key={player.id} />
				})}
			</div>
		</div>
	);
}

// Define proptery types - this is best practice to specify the property types in each compontent.  It will make debugging a lot easier and save a lot of time down the road.  You can make each property a required property by adding in '.isRequired'.
Application.propTypes = {
	title: React.PropTypes.string,
	// We use players which is an array that is comprised of objects in the following 'shape' which includes name, score, and KEY (id) and their types
	players: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		score: React.PropTypes.number.isRequired,
		id: React.PropTypes.number.isRequired,
	})).isRequired,
};

// Define default proptery values - this will provide a default value if they are not later specified explicitly in the instance we create in the .render() function.  It is not necessary to specify a default value for ones are are required, because they will need to be defined explicitely anyway.
Application.defaultProps = {
	title: "Scoreboard",
};


// Render Application component into .container div in DOM tree; include our PLAYERS data model to be used
ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));