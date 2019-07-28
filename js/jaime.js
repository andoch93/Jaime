var needs;
var wants;

function calculateBudget() {
	var wage = document.getElementById('myWage').value;

	needs = wage * .5;
	wants = wage * .3;
	savings = wage * .2;

	$("#submit-button").click(function(){
    	$("#bi-weekly").fadeOut(1000);
	});

	alert('Your Bi-Weekly pay is: ' + '$' + wage + '\n' +
		'50% - Your Recommended Needs budget is: ' + '$' + needs + '\n' +
		'30% - Your Recommended Wants budget is: ' + '$' + wants + '\n' +
		'20% - Your Recommended Savings budget is: ' + '$' + savings);
}

$("#submit-button").click(function(){
    $("#bi-weekly").fadeIn();
});

