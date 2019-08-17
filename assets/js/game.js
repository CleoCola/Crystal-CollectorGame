$(document).ready(function(){
	let Random=Math.floor(Math.random()*19+101)
	$('#randomNumber').text(Random);
	let greenNumber=Math.floor(Math.random()*1+11)
	let redNumber=Math.floor(Math.random()*1+11)
	let blueNumber=Math.floor(Math.random()*1+11)
	let yellowNumber=Math.floor(Math.random()*1+11)
	let score=0;
	let wins=0;
	let losses=0;

	$('#numberOfWins').text(wins);
	$('#numberOfLosses').text(losses);

    $('#green').on('click', function(){
		score=score + greenNumber;
        $('#totalScore').text(score);
        
			if(score === Random){
				win();
			}
			else if(score > Random){
				loss();
			}
    })
    
	$('#red').on('click', function(){
		score=score + redNumber;
        $('#totalScore').text(score);
        
			if(score === Random){
				win();
			}
			else if(score > Random){
				loss();
			}
	})

	$('#blue').on('click', function(){
		score=score + blueNumber;
        $('#totalScore').text(score);
        
			if(score === Random){
				win();
			}
			else if(score > Random){
				loss();
			}
	})

	$('#yellow').on('click', function(){
		score=score + yellowNumber;
        $('#totalScore').text(score);
        
			if(score === Random){
				win();
			}
			else if(score > Random){
				loss();
			}
	})

	function win(){
		alert("Success!");
	 	wins++; 
	  	$('#numberOfWins').text(wins);
	  	reset();
	}

	function loss(){
		alert("Try again.");
		losses++;
		$('#numberOfLosses').text(losses);
		reset();
	}

	function reset(){
		Random=Math.floor(Math.random()*101+19);
		$('#randomNumber').text(Random);
		greenNumber=Math.floor(Math.random()*11+1);
		redNumber=Math.floor(Math.random()*11+1);
		blueNumber=Math.floor(Math.random()*11+1);
		yellowNumber=Math.floor(Math.random()*11+1);
		score=0;
		$('#totalScore').text(score);
	}

});