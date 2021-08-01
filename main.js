var io = {};
var state = 0;

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

		if (state === 0) {
			if (input == 1) {
				state = 1;
				print("one");
			} else if (input == 2) {
				state = 2;
				print("two");
			} else if (input == 3) {
				state = 3;
				print("three");
			} else if (input == 4) {
				state = 4;
				print("four");
			} else if (input == 5) {
				state = 5;
				print("five");
			} else {
				printMenu();
			}
		} else {
			print("Command not found\nType 'help' for a list of commands");
		}

		window.scrollTo(0, document.body.scrollHeight);
	}
}

function printMenu() {
	print("Select story by typing the corresponding number:\n1 Whoever Might Explain This Grim Folly\n2 Eyes Unseen Unknown\n3 They Found It Washed Ashore\n4 Torn Asunder With Plentiful Wisdom\n5 Epilogue [LOCKED]");
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
