var five = {};

five.start = {
	text: "You are standing at the edge of a cemetery in the middle of the night. There is a path leading to the north.",
	north: "skeleton1"
};

five.skeleton1 = {
	text: "After walking down the path for a short bit you come across a grave whose inhabitant apparently didn't feel like staying six feet under. The SKELETON is digging its way out of the ground. Behind you the path goeas back to the SOUTH and in front of you it continues to the NORTH.",
	skeleton: {
		text: "The skeleton has taken off one arm and is using it like a shovel.",
		talk: "\"I don't think this method of digging is all that efficient, but it's just like me to do something like this. I'm less of a person and more of a series of increasingly worse decisions.\""
	},
	south: "start",
	north: "grave1"
};

five.grave1 = {
	text: "You are standing in front of a GRAVE shaded by a large tree, though the only thing it's shaded from at the moment is the light from the full moon, on account of it being the middle of the night. To the SOUTH you can see the skeleton still digging away, and to the NORTH you see the silhouette of a person holding some kind of rectangles.",
	grave: {
		text: "\"Moss\""
	},
	south: "skeleton1",
	north: "salt"
};

five.salt = {
	text: "You come across another PERSON in the middle of this cemetery, in the middle of the night. There is something white on the ground next to them. The grave with the large tree is to the SOUTH, and you can see another grave to the NORTH.",
	person: {
		text: "The person is holding a box of salt in one hand, and an old book in the other.",
		talk: "\"I heard there were a lot of evil spirits here, so I came to banish them. You need to protect yourself with a salt circle in situations like this, but I seriously underestimated how much salt you need for that.\""
	},
	south: "grave1",
	north: "grave2"
};

five.grave2 = {
	text: "You stand in front of a GRAVE that has so many flowers piled up on it you can barely see what is written on the tombstone. The person with the old book is still standing next to their salt to the SOUTH. To the NORTH you see a group of skeletons.",
	grave: {
		text: "\"Smudge\""
	},
	south: "salt",
	north: "skeleton2"
};

five.skeleton2 = {
	text: "You walk up next to a group of SKELETONS who seem to be heading in the same direction as you. That is, the path that continues to the NORTH. SOUTH of you is the grave covered in flowers.",
	skeletons: {
		text: "",
		talk: "\"We're on our way to a party.\""
	},
	south: "grave2",
	north: "grave3"
};

five.grave3 = {
	text: "",
	grave: {
		text: "\"Mana-Lo\""
	},
	south: "skeleton2",
	north: "end"
};

five.end = {
	text: "A bunch of skeletons are having a party. They are all dancing around a single GRAVE. The path you just arrived on is leading back to the SOUTH.",
	grave: {
		text: "\"YOU\"",
		end: true
	},
	south: "grave3"
};
