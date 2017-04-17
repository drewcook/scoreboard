function Application(props) {
	return (
		<div className="scoreboard">
			<div className="header">
				<h1>{props.title}</h1>
			</div>
			<div className="players">
				<div className="player">
					<div className="player-name">
						Johnny Appleseed
					</div>
					<div className="player-score">
						<div className="counter">
							<button className="counter-action decrement"> - </button>
							<div className="counter-score">40</div>
							<button className="counter-action increment"> + </button>
						</div>
					</div>
				</div>
				<div className="player">
					<div className="player-name">
						Paul Bunyan
					</div>
					<div className="player-score">
						<div className="counter">
							<button className="counter-action decrement"> - </button>
							<div className="counter-score">34</div>
							<button className="counter-action increment"> + </button>
						</div>
					</div>
				</div>
				<div className="player">
					<div className="player-name">
						Bugs Bunny
					</div>
					<div className="player-score">
						<div className="counter">
							<button className="counter-action decrement"> - </button>
							<div className="counter-score">42</div>
							<button className="counter-action increment"> + </button>
						</div>
					</div>
				</div>
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