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

// Create a new 'Component Class' - creating a new class allows us to use different 'states' of a component, instead of Stateless Functional Components.  A component class contains an object. We can specity what we want to render as well as defined property types through keys/properties of our class.
var Counter = React.createClass({
	propTypes: {
		initialScore: React.PropTypes.number.isRequired,
	},

	// Create a method for getting the initial state of our counter, this built in method for component classes will set our initial state of our class to whatever we have it return.  Lets set our counter's initial state to 0.
	getInitialState: function() {
		return {
			score: this.props.initialScore,
		}
	},

	// Now lets create some methods to increase/decrease our counter for keeping score.  The setState() method contains an object literal.  What it does is it rerenders every time it is called.  So rather than saying this.state.score += 1, we use setState(), otherwise, the score may update but React doesnt know to rerender itself after it happens.
	incrementScore: function() {
		this.setState({
			score: (this.state.score + 1),
		})
	},
	decrementScore: function() {
		this.setState({
			score: (this.state.score - 1),
		})
	},

	render: function() {
		// We call the methods without (), because the way 'this' works in React.  React automatically binds methods to its current instance of the Class.
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={this.decrementScore}> - </button>
				<div className="counter-score">{this.state.score}</div>
				<button className="counter-action increment" onClick={this.incrementScore}> + </button>
			</div>
		);
	}
});

// Player component - so we can reuse it multiple times and make our application much more easy to read.  It is essential to break down our main application component into multiple smaller components so we are more organized and things are easier to edit.
function Player(props) {
	return (
		<div className="player">
			<div className="player-name">
				{props.name}
			</div>
			<div className="player-score">
				<Counter initialScore={props.score} />
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