// Create an object that stores individual letters in an array and has
// a function for displaying the letters as a single word.

//Constructor
function Letters() {
    this.storeLetters = [];
	this.add = add;
	this.word = word;
}


// Adds a grade in the array
function add(letter) {
    return this.storeLetters.push(letter);
}

// joins the letters in the array
function word(){
	return this.storeLetters.join('');
}


var letter = new Letters();
letter.add('c');
letter.add('o');
letter.add('c');
letter.add('o');
letter.add('n');
letter.add('u');
letter.add('t');
letter.word();
console.log(letter.word());
