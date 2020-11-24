//Write a function to compute the fewest number of coins that you need to make up that amount.
var money = [1, 2,5];
var count = 0;
var numCoin = 0;

function calCoin(coins, amount) {
    coins.sort((a, b) => b - a);
    for (var i = 0; i < coins.length; i++) {
        while (amount - count >= coins[i]) {
            count += coins[i];
            numCoin++;
        }
       
    }
}
calCoin(money, 11);
console.log(numCoin);