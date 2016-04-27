// Modify the weeklyTemps object in the chapter so that it stores a month's worth of
// data using a two-dimensional array. Create functions to display the monthly average,
// a specific week's average, and all the week's averages.

Array.matrix = function(numrows, numcols, initial) {
	var arr = [];
	for(var i =0; i < numrows; ++i) {
		var columns = [];
		for( var j = 0; j < numcols; ++j) {
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

function Month() {
	var row = 5;
	var col = 7;
	var month = Array.matrix(row, col, 0);

}




function weekAverage() {


}

function weeklyAverage() {

}



function monthlyAverage() {


}
