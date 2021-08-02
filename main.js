var io = {};
var story = null;
var room;

function init() {
	io.input = document.getElementById("input");
	io.output = document.getElementById("output");
	io.prompt = document.getElementById("prompt");
	print("                  Whoever Might Explain This\n  _____ _____  _____ __  __   ______ ____  _      _  __     __\n / ____|  __ \\|_   _|  \\/  | |  ____/ __ \\| |    | | \\ \\   / /\n| |  __| |__) | | | | \\  / | | |__ | |  | | |    | |  \\ \\_/ /\n| | |_ |  _  /  | | | |\\/| | |  __|| |  | | |    | |   \\   /\n| |__| | | \\ \\ _| |_| |  | | | |   | |__| | |____| |____| |\n \\_____|_|  \\_\\_____|_|  |_| |_|    \\____/|______|______|_|\n");
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
		} else if (input === "help") {
			print("walk\ntalk\nexamine\nlook");
		} else {
			print("Command not found\nType 'help' for a list of commands");
		}

		window.scrollTo(0, document.body.scrollHeight);
	}
}

function printMenu() {
	let text = "Select story by typing the corresponding number:\n1 Whoever Might Explain This Grim Folly\n2 Eyes Unseen Unknown\n3 They Found It Washed Ashore\n4 Torn Asunder With Plentiful Wisdom\n5 Epilogue";
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
	io.input.style.width = (document.body.offsetWidth - io.prompt.offsetWidth * 4) + "px";
}
