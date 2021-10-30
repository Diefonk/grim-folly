var one = {};

one.start = {
	text: "You are sitting in your living room reading a book when the PHONE starts ringing. You consider just going out your front door, which is to the WEST.",
	phone: {
		text: "It is one of those newfangled phones you can talk into.",
		talk: "\"Hello?\"\n\"Hi, I'm calling from the power company. Is now a good time to talk?\"\n\"Yes.\"\n\"Okay, I'll call back later then.\""
	},
	west: "garden"
};

one.garden = {
	text: "Just as you step out of your house, you see a skeleton rip up your mailbox and the pole it sits on from the ground, and start running away to the SOUTH with it. You think you should probably chase that skeleton.",
	south: "bus1"
};

one.bus1 = {
	text: "You come to a bus stop where JOHN is waiting for the bus. Farther to the SOUTH you see the skeleton still running.",
	john: {
		text: "He is wearing his usual suit and has his usual suitcase on the ground next to him.",
		talk: "\"There are two kinds of people in this world: those who believe there are two kinds of people, and those who believe that each individual is far too unique and complex for them to be divided into two groups.\""
	},
	south: "chase1"
};

one.chase1 = {
	text: "Just as you think you might be catching up, the skeleton gets a boost from a RAINBOW it farts. Still, you have to keep chasing it as it continues SOUTH.",
	rainbow: {
		text: "It is a truly magnificent sight and you are happy that you actually get to see it instead of, for example, having it loosely described to you in text form. Skeleton farts are rare events and you have to appreciate it, despite the circumstances."
	},
	south: "bus2"
};

one.bus2 = {
	text: "You come to a bus stop where JOHN is waiting for the bus. The skeleton is still ahead of you to the SOUTH.",
	john: {
		text: "He is wearing his usual suit and has his usual suitcase on the ground next to him.",
		talk: "\"The colours of this world are all just different shades of one colour in another world.\""
	},
	south: "chase2"
};

one.chase2 = {
	text: "The skeleton seems tireless in its ridiculous sprint. You are starting to get tired in your ridiculous pursuit. Both of you run SOUTH.",
	south: "bus3"
};

one.bus3 = {
	text: "You come to a bus stop where JOHN is waiting for the bus. The skeleton (the one running SOUTH) shows no signs of stopping.",
	john: {
		text: "He is wearing his usual suit and has his usual suitcase on the ground next to him.",
		talk: "\"Everything exists.\""
	},
	south: "bus4"
};

one.bus4 = {
	text: "You come to a bus stop where JOHN is waiting for the bus. Skeleton = SOUTH.",
	john: {
		text: "He is wearing his usual suit and has his usual suitcase on the ground next to him.",
		talk: "\"The thought that our entire universe is just a computer simulation is pretty common, but what if it is far less advanced than that? What if our entire universe is just a simple math example drawn on some multidimensional blackboard by some multidimensional math teacher, and me saying this is just a math joke?\""
	},
	south: "bus5"
};

one.bus5 = {
	text: "You come to a bus stop where JOHN is waiting for the bus. It seems unlikely that you will ever catch up to the skeleton, as it is constantly ahead of you to the SOUTH.",
	john: {
		text: "He is wearing his usual suit and has his usual suitcase on the ground next to him.",
		talk: "\"Hi.\""
	},
	south: "end"
};

one.end = {
	text: "Despite the futility of it all, your chase continues. Will it ever end? Will any of our chases ever end? Are we all doomed to live our foolish lives until we die our foolish deaths? Does anyone have the answers to these questions? Whoever might explain this grim folly?",
	end: true
};
