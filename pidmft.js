// verification - no null - no spaces
// fix submition after clear problem
// add user conditional formating

var Baby = require('babyparse')
// browserify pidmft.js > bundle.js

$('.format-btn').on('click', function() {
	var oldData = $('.old-data').val().trim()
	var oldMID = $('.old-mid').val().trim()
	var newMID = $('.new-mid').val().trim()
	var srcUGC = $('.src-ugc').val().trim()
	console.log(oldData)
	console.log(oldMID)
	console.log(newMID)
	console.log(srcUGC)
	
	console.log("---------------------")

	parsed = (Baby.parse(oldData)).data;
	convertedData = reFormat(parsed, oldMID, newMID, srcUGC)

	prettyPrint(convertedData)

})

$('.lil-one').on('click', function() {
	$('.old-data').val("")
	$('.old-mid').val("")
	$('.new-mid').val("")
	$('.src-ugc').val("")
})

$('.lil-two').on('click', function() {
	$('.new-data').val("")
})

function reFormat(parsedData, oldMID, newMID, srcUGC) {
	var convertedArr = []
	for (i=0; i<parsedData.length; i++) {
		var oldPID = parsedData[i][0]
		var newPID = parsedData[i][1]
		var oldVAR = parsedData[i][2]
		var newVAR = parsedData[i][3]

		var lineResult = newMID + "," + newPID + "," + newVAR + "," +
										 oldMID + "," + oldPID + "," + oldVAR + "," + srcUGC

		convertedArr.push(lineResult)
	}
	return convertedArr
}

function prettyPrint(array) {
	for (i=0; i<array.length; i++) {
		$('.new-data').append(array[i] + "\n")
	}
}
