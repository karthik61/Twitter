/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready( function() {    

    // get count.json

    $.getJSON("/counts.json", function(keywordCount) {
	// keywordCount is an object
	// console.log('Ebola count: '+keywordCount.ebola);

		// add a <p> to output-area
		$('#output-area').append('<p>Ebola count = '+keywordCount.ebola+'</p>');
    });  // done getJSON
        
}); // done ready
