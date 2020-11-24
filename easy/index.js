//Write a function that takes in an array of numbers and outputs the average of all the numbers.

function calcAverage(arr){
    var total = 0;
    for(i=0; i < arr.length; i++){ 
     total += arr[i]; 
    }
     var average = total/arr.length;
    console.log(average);
}
var numbers = [1,4,7];
var numb2 =[10, 5];
var numb3 =[1.5, 3, 2.5, 1];
calcAverage(numbers);
calcAverage(numb2); 
calcAverage(numb3);

