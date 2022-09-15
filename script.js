//1 - Negative or Positive

function isNumberPositive(number) {

        if (number >= 0)
            console.log("Number " + number + " is positive")
        else
            console.log("Number " + number + " is negative")

}

isNumberPositive(3);

//2 - Days to Years

function convertDaysToAge(days) {
    const daysInAYear = 365
    days = (days / daysInAYear)
    console.log("The amount of years is " + days);
}

convertDaysToAge(3680);

//3 - Largest Number

function getLargestNumber(number1, number2, number3) { 
    console.log("The largest number is " + Math.max(number1, number2, number3));

}

getLargestNumber(3, 18, 17);

//4 - Last Name of the List

    const listOfNames = ["Charlie", "Rob", "Andy"];
    console.log(listOfNames[2]);
