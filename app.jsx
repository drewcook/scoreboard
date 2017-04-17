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

// Player component - so we can reuse it multiple times and make our application much more easy to read.  It is essential to break down our main application component into multiple smaller components so we are more organized and things are easier to edit.
function Player(props) {
	return (
		<div className="player">
			<div className="player-name">
				{props.name}
			</div>
			<div className="player-score">
				<div className="counter">
					<button className="counter-action decrement"> - </button>
					<div className="counter-score">{props.score}</div>
					<button className="counter-action increment"> + </button>
				</div>
			</div>
		</div>
	);
}
// Player property types
Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired,
}

// Application component
function Application(props) {
	return (
		<div className="scoreboard">
			<Header title={props.title} />

			<div className="players">
				<Player name="Johnny Appleseed" score={53} />
				<Player name="Paul Bunyan" score={48} />
				<Player name="Lochness Monster" score={40} />
			</div>
		</div>
	);
}

// Define proptery types - this is best practice to specify the property types in each compontent.  It will make debugging a lot easier and save a lot of time down the road.  You can make each property a required property by adding in '.isRequired'.
Application.propTypes = {
	title: React.PropTypes.string,
};

// Define default proptery values - this will provide a default value if they are not later specified explicitly in the instance we create in the .render() function.  It is not necessary to specify a default value for ones are are required, because they will need to be defined explicitely anyway.
Application.defaultProps = {
	title: "Scoreboard",
};


// Render Application component into .container div in DOM tree
ReactDOM.render(<Application />, document.getElementById('container'));