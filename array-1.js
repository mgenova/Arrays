// Create a grades object that stores a set of student grades in an object. Provide a function
// for adding a grade and a function for displaying the student's grade average.

//Constructor
function Grades() {
    this.storeGrades = [];
}


// Adds a grade in the array
Grades.prototype.add = function(grade) {
    return this.storeGrades.push(grade);
}

// Averages grades in the array
Grades.prototype.average = function() {
   var total = 0;
   this.storeGrades.forEach(function(grade) {
	   total += grade;
   });
   return total/ this.storeGrades.length;
}


var grade = new Grades();

grade.add(88);
grade.add(70);
grade.add(100);
console.log(grade.average());
