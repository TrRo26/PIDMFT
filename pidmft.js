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







// old page id,new page id,old variant,new variant
const array = [
203900,205945,,
204943,206078,,
203356,205980,,
200877,206130,,
205013,206180,,
204919,206077,,
204952,206169,,
204917,206181,,
204948,206113,,
204996,206172,,
204871,205976,,
204083,205087,,
201980,206134,,
203843,206120,,
]

var stringed = JSON.stringify(array)
// console.log(stringed)

function newLine(array) {
	for (i=0; i<array.length; i++) {
		if (array[i] === "\n") {
			console.log("it worked!!")
		}
	}
}

function format(array) {
	var finalArr = []
	var tempArr = []
	for (i=0; i<array.length; i++) {
		if (i != 0 & i % 3 === 0) {
			tempArr.push("")
			finalArr.push(tempArr)
			tempArr = []
		} else {
			tempArr.push(array[i])
		}
	}
	console.log(finalArr)
}

function convert(array) {
	var newArr = []
	for (i=0; i<array.length; i++) {
		if (array[i] != null) {
			console.log('num')
		} else {
			console.log('0')
		}
	}
}

// format(array)
// convert(array)

// ==============================================

// new merch ID, new page ID, new variant, old merch ID, old page ID, old variant, source UGC ID
// 7324,205945,,7324,203900,,

var desiredResult = [
	7324,205945,,7324,203900,,
	7324,206078,,7324,204943,,
	7324,205980,,7324,203356,,
	7324,206130,,7324,200877,,
	7324,206180,,7324,205013,,
	7324,206077,,7324,204919,,
	7324,206169,,7324,204952,,
	7324,206181,,7324,204917,,
	7324,206113,,7324,204948,,
	7324,206172,,7324,204996,,
	7324,205976,,7324,204871,,
	7324,205087,,7324,204083,,
	7324,206134,,7324,201980,,
	7324,206120,,7324,203843,,
]