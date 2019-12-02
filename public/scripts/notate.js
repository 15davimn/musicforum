/*
		The array (so far) will be like this:
		chordsArray[0] - Chord name
		chordsArray[1] - Start pos of chord name
		chordsArray[2] - End pos of chord name
		chordsArray[3] - Chord name length
		chordsArray[4] - lengths of spaces after chord
		Repeat for chordsArray[2],[3]...... etc.
	*/


function notate() {
	var chordsAndLyrics = "";
	var chordsArray = new Array(200);
	var tempChord = "";
	var arrayCount = 0;
	var bracketLength = 2;
	var lyricsOnly;
	var chordsOnly = "";
	var songWidth = 60;
	var tempCount = 0;


	chordsAndLyrics = document.getElementById("mytextarea").value; //gets value from thetextarea
	lyricsOnly = chordsAndLyrics.replace(/\[(.*?)\]/g, ''); //removes all chords from lyrics


	var insideChordBrackets = false;
	for  (var a = 0; a < chordsAndLyrics.length; a++) { //loops through all characters of the lyrics


		/* Finds chords within the song
		*/
		if (chordsAndLyrics.charAt(a) == "[") { //finds an opening bracket and sets to "inside chord"
			insideChordBrackets = true;
			a++;
		} else if (chordsAndLyrics.charAt(a) == "]") { //finds a closing bracket and sets to not "inside chord"
			insideChordBrackets = false;
		}
				
				
		/* Temporarily stores the chord to the temChord variable
		*/
		if (insideChordBrackets) {
			tempChord = tempChord + chordsAndLyrics.charAt(a);
		}
		
		
		/* Stores the chord, start and stop, length, etc. to the chordsArray
		*/
		if (!insideChordBrackets && (tempChord)) {
			chordsArray[arrayCount + 0] = tempChord; //name of chord
			chordsArray[arrayCount + 1] = a - tempChord.length; //starting point of chord position
			chordsArray[arrayCount + 2] = a; // ending point of chord position
			chordsArray[arrayCount + 3] = (chordsArray[arrayCount].length); //chord name length
			chordsArray[arrayCount + 4] = tempCount; //length after last chord


			/*console.log("chordsArray[" + (arrayCount)  +
						"]:    Chord Name        - "   + chordsArray[arrayCount] +
						"\nchordsArray[" + (arrayCount + 1) +
						"]:    Chord Start Pos   - "   + chordsArray[arrayCount + 1] +
						"\nchordsArray[" + (arrayCount + 2) +
						"]:    Chord End Pos     - "   + chordsArray[arrayCount + 2] +
						"\nchordsArray[" + (arrayCount + 3) +
						"]:    Chord Name Length - "   + chordsArray[arrayCount + 3] +
						"\nchordsArray[" + (arrayCount + 4) +
						"]:    Cumalitive Length - "   + chordsArray[arrayCount + 4] +
						"\n\n");
			*/
			arrayCount = arrayCount + 5;
			//console.log("starting pos: " + (a - tempChord.length) + "  " + (chordsArray[arrayCount - 4])); 
			//console.log(tempCount);
			tempChord = "";
		}
			if (!isNaN((chordsArray[arrayCount - 3]))) {
				tempCount = (a - tempChord.length) - (chordsArray[arrayCount - 3]) - 1;
			} else {
				tempCount = 0;
			}
	}


		//chordsArray.forEach(function(item){console.log(item);});
		
		
		//formats chordsonly
		arrayCount = 0;		
		for (var y = 0; y < chordsArray.length; y+=5) {
			for (var z = 0; z < (chordsArray[y + 4]) - (chordsArray[y + 3]); z++) {
				chordsOnly = chordsOnly + " ";
			}

			if (!(typeof chordsArray[y] === "undefined")) {
				chordsOnly = chordsOnly + chordsArray[y];
			}
			//for (var z = 0; z < ((chordsArray[arrayCount + 6] - chordsArray[arrayCount + 1]) - chordsArray[arrayCount + 8] - bracketLength); z++) {
				
		arrayCount++;
		}
		
		
	document.getElementById('mytextarea').value = chordsOnly + "\n" + lyricsOnly; //replaces the contents of the textarea with the newly formatted song
	//document.getElementById('mytextarea').value = chordsOnly; //replaces the contents of the textarea with the newly formatted song
}
