var io = {};
var story = null;
var room;

function init() {
	io.input = document.getElementById("input");
	io.output = document.getElementById("output");
	io.prompt = document.getElementById("prompt");
	if (document.body.offsetWidth > 860) {
		print(bigTitle);
	} else if (document.body.offsetWidth > 470) {
		print(mediumTitle);
	} else {
		print(smallTitle);
	}
	printMenu();
	setPrompt();
	focusInput();
}

function handleInput(aEvent) {
	if (aEvent.keyCode === 13) {
		aEvent.preventDefault();

		print("> " + io.input.value);
		const input = io.input.value.toLowerCase();
		io.input.value = "";

		if (story === null) {
			if (input == 1) {
				story = one;
				initStory();
			} else if (input == 2) {
				story = two;
				initStory();
			} else if (input == 3) {
				story = three;
				initStory();
			} else if (input == 4) {
				story = four;
				initStory();
			} else if (input == 5) {
				if (one.done && two.done && three.done && four.done) {
					story = five;
					initStory();
				} else {
					print("Finish the other stories to unlock the epilogue");
				}
			} else {
				printMenu();
			}
		} else if (input === "exit") {
			story.done = true;
			story = null;
			printMenu();
		} else if (input === "walk" || input === "w" || input.substr(0, 5) === "walk " || input.substr(0, 2) === "w ") {
			let spaceIndex = input.indexOf(" ");
			let direction = "";
			if (spaceIndex >= 0) {
				direction = input.substr(spaceIndex + 1);
				switch (direction) {
					case "n":
						direction = "north";
						break;
					case "s":
						direction = "south";
						break;
					case "e":
						direction = "east";
						break;
					case "w":
						direction = "west";
						break;
					default:
						break;
				}
				if (!["north", "south", "east", "west"].includes(direction)) {
					direction = "";
				}
			}
			if (direction === "") {
				print("The walk command requires a direction\ne.g. 'walk north' or 'w n'");
			} else if (direction in room) {
				room = story[room[direction]];
				print(room.text);
			} else {
				print("There is nothing in that direction");
			}
		} else if (input === "look" || input === "l") {
			print(room.text);
		} else if (input === "help") {
			print(help);
		} else if (input === "xyzzy") {
			print("Nothing happens");
		} else {
			print("Command not found\nType 'help' for a list of commands");
		}

		window.scrollTo(0, document.body.scrollHeight);
	}
}

function printMenu() {
	let text = menu;
	if (!one.done || !two.done || !three.done || !four.done) {
		text += " [LOCKED]";
	}
	print(text);
}

function initStory() {
	room = story.start;
	print(room.text);
}

function print(aString) {
	var output = document.createElement("p");
	var text = document.createTextNode(aString + "\n\n");
	output.appendChild(text);
	io.output.appendChild(output);
}

function focusInput() {
	io.input.focus();
}

function setPrompt() {
	io.prompt.innerHTML = "> ";
	io.input.style.width = (document.body.offsetWidth - io.prompt.offsetWidth - 64) + "px";
}

const bigTitle = `                  Whoever Might Explain This
  _____ _____  _____ __  __   ______ ____  _      _  __     __
 / ____|  __ \\|_   _|  \\/  | |  ____/ __ \\| |    | | \\ \\   / /
| |  __| |__) | | | | \\  / | | |__ | |  | | |    | |  \\ \\_/ /
| | |_ |  _  /  | | | |\\/| | |  __|| |  | | |    | |   \\   /
| |__| | | \\ \\ _| |_| |  | | | |   | |__| | |____| |____| |
 \\_____|_|  \\_\\_____|_|  |_| |_|    \\____/|______|______|_|
`;

const mediumTitle = `   Whoever Might Explain This
    _____ _____  _____ __  __
   / ____|  __ \\|_   _|  \\/  |
  | |  __| |__) | | | | \\  / |
  | | |_ |  _  /  | | | |\\/| |
  | |__| | | \\ \\ _| |_| |  | |
   \\_____|_|  \\_\\_____|_|  |_|
 ______ ____  _      _  __     __
|  ____/ __ \\| |    | | \\ \\   / /
| |__ | |  | | |    | |  \\ \\_/ /
|  __|| |  | | |    | |   \\   /
| |   | |__| | |____| |____| |
|_|    \\____/|______|______|_|
`;

const smallTitle = `whoever might explain this
-GRIM FOLLY-
`;

const menu = `Select story by typing the corresponding number:
1 Whoever Might Explain This Grim Folly
2 Eyes Unseen Unknown
3 They Found It Washed Ashore
4 Torn Asunder With Plentiful Wisdom
5 Epilogue`;

const help = `Commands:
walk     (w) - walk in one of the cardinal directions
talk     (t) - talk to a character
examine  (x) - examine an object
look     (l) - get information about where you are`;
