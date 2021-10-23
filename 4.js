var four = {};

four.start = {
	text: "You are in some sort of labyrinthian library. The walls are covered with books you have never heard of. You can go EAST.",
	east: "books1"
};

four.books1 = {
	text: "The BOOKS here seem a little bit more familiar to you, but the layout of this place still baffles you. You can go WEST.",
	books: {
		text: "All of these books are written by authors who turned out to be bad people and seemingly did not learn the moral lessons they wrote themselves."
	},
	west: "books2"
};

four.books2 = {
	text: "Even though you went back the same way you came from, you are now surrounded by different BOOKS. It seems the walls of this place do not like staying in the same position for very long. You can go NORTH.",
	books: {
		text: "All of these books are written by people who deserve to be awarded with the Nobel Prize in Literature, but never will for various reasons."
	},
	north: "books3"
};

four.books3 = {
	text: "There seems to be only one way to go at all times, so you go that way. More BOOKS. You can go WEST.",
	books: {
		text: "All of these books are the same trashy crime novel. You think that whoever owns this place bought them for very cheap when the publisher just wanted to get rid of their stock."
	},
	west: "books4"
};

four.books4 = {
	text: "Surprisingly, there are even more BOOKS here. You can go SOUTH.",
	books: {
		text: "All of these books are written by skeletons, for skeletons."
	},
	south: "books5"
}

four.books5 = {
	text: "You wonder if there is any end to all of these BOOKS. You can go EAST.",
	books: {
		text: "All of these books are written by people cursed with terrible fates."
	},
	east: "end"
}

four.end = {
	text: "You are completely surrounded by bookshelves with nowhere to go. In the middle of the space is a table with a single big BOOK on it.",
	book: {
		text: "Despite being in a language you have never even heard of, you find that you can read the book prefectly fine. The words just sort of pour into your mind, and you are so suprised by this that you at first do not realize you are unable to put the heavy tome down. You start to feel overwhelmed by all the knowledge quickly filling your brain, and you soon come to understand that there is no escaping this. In a dark corner, a shadowy figure watches eagerly as you are torn asunder with plentiful wisdom.",
		talk: "\"Read me!\"",
		end: true
	}
};
