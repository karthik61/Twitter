/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready( function() {    


    setInterval(function() {

    // get count.json

    $.getJSON("/counts.json", function(keywordCount) {
	// keywordCount is an object
	// console.log('Ebola count: '+keywordCount.ebola);

		// add a <p> to output-area                     
		$('#output-area').html('<p >Ebola count = <b style="color:pink">'+keywordCount.ebola+'</b> hurricane count = <b style="color:red">'+keywordCount.hurricane+'</b> earthquake count = <b 				style="color:green">'+keywordCount.earthquake+'</b></p>');
		
    });  // done getJSON

   }, 2000);  // done setInterval
        
}); // done ready
