var needs;
var wants;

function myFunction() {
	var wage = document.getElementById('myWage').value;

	needs = wage * .5;
	wants = wage * .3;
	savings = wage * .2;

	$("#submit-button").click(function(){
    	$("#bi-weekly").fadeOut(1000);
	});

	alert('Your Bi-Weekly pay is: ' + '$' + wage + '\n' +
		'Your Recommended Needs budget is: ' + '$' + needs + '\n' +
		'Your Recommended Wants budget is: ' + '$' + wants + '\n' +
		'Your Recommended Savings budget is: ' + '$' + savings);
}

$("#submit-button").click(function(){
    $("#bi-weekly").fadeIn();
});

