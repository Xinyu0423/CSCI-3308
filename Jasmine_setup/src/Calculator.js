function Calculator() {
}

Calculator.prototype.add = function(value1, value2) {
  return value1 + value2;
};
Calculator.prototype.sub = function(value1, value2) {
  return value1 - value2;
};
Calculator.prototype.multiply = function(value1, value2) {
  return value1 * value2;
};
Calculator.prototype.divide = function(value1, value2) {
  return value1 / value2;
};

/*
	Create the 3 additional methods to handle subtraction, multiplication, and division.
	sub(), multiply(), divide()
 */

var calc = new Calculator();


function calculateValue()
{
	switch(operation)
	{
		case '+':
			total = calc.add(total,value2);
			break;
		/* 
		* Complete the switch statement to handle subtraction, multiplication, and division
		*/
		case '-':
			total=calc.sub(total,value2);
			break;

		case '*':
			total=calc.multiply(total,value2);
			break;

		case '/':
			total=calc.divide(total,value2);
			break;

	}
}


/*
*  The remaining code will not need to be updated.  The following code handles the interactive functionality
	for the html calculator's User Interface.
*/
var operation ='';
var total = 0;
var value2 = 0;
function selectNum(number)
{
	document.getElementById("number_field").value += number.toString();
}

function selectOperation(operand)
{
	if(operation == '')
	{
		total = parseInt(document.getElementById("number_field").value);
		document.getElementById("number_field").value="";
	}
	else
	{
		value2 = parseInt(document.getElementById("number_field").value);
		document.getElementById("number_field").value="";
		calculateValue();
	}
	operation = operand;
}

function displayResult()
{
	value2 = parseInt(document.getElementById("number_field").value);
	calculateValue();
	document.getElementById("number_field").value = total.toString();
	operation = '';
}

function clearField()
{
	document.getElementById("number_field").value =""; 
	operation = '';
	total = 0;
	value2 = 0;
}



