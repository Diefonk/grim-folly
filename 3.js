var three = {};

three.start = {
	text: "You are ready lo leave. The docks are to the WEST.",
	west: "street1"
};

three.street1 = {
	text: "As the lights turn on in the windows around town, your final morning stroll continues to the WEST.",
	west: "street2"
};

three.street2 = {
	text: "You stop to breathe in the fresh morning air mixed with the various smells of the town waking up. There is the bakery to the NORTH, the stable to the SOUTH, and the docks to the WEST.",
	north: "bakery",
	south: "stable",
	west: "docks"
};

three.bakery = {
	text: "The bakery is filled with pleasant smells, and is much warmer than the street outside to the SOUTH. Behind the counter, the BAKER is attempting to smile at you.",
	baker: {
		text: "They are trying to not look sad.",
		talk: "\"Did I tell you my mother was lost on that ship? Of course I did, but you won't listen, will you?\""
	},
	south: "street2"
};

three.stable = {
	text: "The stable is filled with all the smells of horses. You never saw the appeal, and consider exiting NORTH to the street. A lonely SQUIRE is tending to her knight's horse.",
	squire: {
		text: "She is pretending to not be sad.",
		talk: "\"I've seen many knights who were far stronger than you come back as mere skeletons. They all think it'll be different for them, that they'll be the ones to finally complete the journey and reap the rewards.\""
	},
	north: "street2"
};

three.docks = {
	text: "You look out at the vast ocean, then your eyes land on the ship. Behind you, to the EAST, is the town, and in front of you, to the WEST, is your future. Your BROTHER is waiting for you.",
	brother: {
		text: "He looks sad.",
		talk: "\"I suppose it's useless to try to talk you out of it. Not like I haven't tried enough already. All I can do now is hope you'll return, however unlikely that may be.\""
	},
	east: "street2",
	west: "end"
};

three.end = {
	text: "Despite all the warnings, you take to the sea on that weathered old ship. No living soul sees you again, but the ship comes back like it always does. Months later another fool tries their luck, only a couple of hours after they found it washed ashore.",
	end: true
};
