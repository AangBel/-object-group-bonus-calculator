// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  console.log('in calculatInd');
  console.log( employee );
  for(let i = 0; i < employees.length; i++){
    //console.log(employees[i]);
     if (employees[i].name === employee){
        if (employees[i].reviewRating <= 2){
            console.log('no bonus');
        } else if (employees[i].reviewRating === 3){
            console.log('4% bonus');
            if (employees[i].employeeNumber.length === 4 ){
                console.log('+5%');
            }
        } 

      console.log(employees[i].annualSalary);
    }



  }
  
  // return new object with bonus results

}
console.log(calculateIndividualEmployeeBonus('Atticus'));