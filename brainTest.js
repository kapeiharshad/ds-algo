const fruit = {name: "Orange"}; // Assigned object to fruit varailble

let moreFruit = fruit; // Assigned reference of fruit object to moreFruit varaible 

fruit.name = "Apple"; // Changed Fruit name key value to Apple

console.log(fruit.name); // o/p --> Apple because we have changed fruit name field to Apple.

console.log(moreFruit.name); // o/p --> Apple because reference of fruit is assigned to moreFruit not value so if we changed fruit varaible it will manupilate moreFruit varialble also 


function formatDate(date) { // fromatDate function is use to format dates of different format to ISO date format
    let d = new Date(date); // creates ISO string of date;
    let month = '' + (d.getMonth() + 1); // give month of respective date for ex: Jan=0,Feb=1;
    let day = '' + d.getDate(); // give day of respective date for ex: 01
    let year = d.getFullYear(); // give year of respective date for ex:2021

    // checks day and month if it is less then 10 it will append 0 
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return new Date([year, month, day].join('-')); // return proper ISO string of respective year,month,day 
}

function checkDateFunc(dateArray) {  // checkDateFunc function will check the respective date is greater then equal or less then equal to fromDate and toDate and return new array
    const newArray=[]
    for (let i = 0; i < dateArray.length; i++) {
    const checkDate = formatDate(dateArray[i]); // format respective date to ISO string
    const fromDate=formatDate("Dec 12, 2019"); // format respective date to ISO string
    const toDate=formatDate("Jan 5, 2021"); // format respective date to ISO string
        if (checkDate >= fromDate && checkDate <= toDate) { // checks date if it is greater then equal or less then equal to fromDate and toDate
            newArray.push(dateArray[i])
        }
    }
    return newArray; // return new array list
}

const arrList=['2021-01-05','05/21/2021','Jan 1, 2018',"Dec 10, 2020",'2021-01-01','01/01/2021'];


console.log(checkDateFunc(arrList))  // o/p ---> [ '2021-01-05', 'Dec 10, 2020', '2021-01-01', '01/01/2021' ]


