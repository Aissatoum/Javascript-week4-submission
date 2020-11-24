//Writing a function of an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
function find(numbers, target){
    return numbers.indexOf(target);
}
var nums = [4,5,6,7,0,1,2];
var check = find(nums, 0);
var secondCheck = find(nums, 3); 
console.log(check);
console.log(secondCheck);