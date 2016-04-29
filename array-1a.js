// Create a grades object that stores a set of student grades in an object. Provide a function
// for adding a grade and a function for displaying the student's grade average.


var Grades = {
    storeGrades: [],

	// Adds a grade in the array
	add:function(grade) {
	    this.storeGrades.push(grade);
		return this;
	},

	// Averages grades in the array
	average: function() {
	   var total = 0;
	   this.storeGrades.forEach(function(grade) {
		   total += grade;
	   });
	   return total/ this.storeGrades.length;
	}

};


 console.log(Grades.add(80).add(90).add(65).add(85).average());
