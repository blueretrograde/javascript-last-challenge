//1 

function isNumberPositive(number) {

        if (number >= 0)
            console.log("Number " + number + " is positive")
        else
            console.log("Number " + number + " is negative")

}

isNumberPositive(3);

//2

function convertDaysToAge(days) {
    const daysInAYear = 365
    days = (days / daysInAYear)
    console.log("The amount of years is " + days)
}

convertDaysToAge(3680);

