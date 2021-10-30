var two = {};

two.start = {
	text: "You are standing in the brightly lit room where you live your life. There is something you are looking for, and you think it might be to the NORTH.",
	north: "error"
};

two.error = {
	text: "404 - Page not found\nGo back SOUTH?",
	south: "room1"
};

two.room1 = {
	text: "You click the back button and return to your room. There is a new COMMENT waiting for you. Maybe that thing is to the WEST?",
	comment: {
		text: "It is another hateful comment, but you are not going to let it get to you!"
	},
	west: "web1"
};

two.web1 = {
	text: "The walls are drenched in activity tracking cookies and algorithms optimized for maximum engagement. You ignore them like usual and focus on the small bit of CONTENT on the floor.\nGo back EAST?",
	content: {
		text: "The content is not as exciting as the title made it seem, and it is definitely not the thing you are looking for."
	},
	east: "room2"
};

two.room2 = {
	text: "Another COMMENT awaits your return. You consider trying SOUTH next.",
	comment: {
		text: "This comment gets to you. Maybe sharing your entire life with anyone who wants to watch is not healthy? Nah!"
	},
	south: "web2"
};

two.web2 = {
	text: "A skeleton GIF dances around you. It cheers you up a little.\nGo back NORTH?",
	north: "room3"
};

two.room3 = {
	text: "You ignore the slew of new comments waiting for you, and make a final attempt to find what you are looking for. Only EAST left to try.",
	east: "web3"
};

two.web3 = {
	text: "You get distracted by some fresh memes and forget what you were looking for.\nGo back WEST?",
	west: "end"
};

two.end = {
	text: "Despite knowing better, you continue your life the same way, while your fickle audience watches you from the shadows with their hungry eyes.\nUnseen.\nUnknown.",
	end: true
};
