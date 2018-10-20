function countNumbers(){
let string = document.getElementById('numbers').value;
let array = string.split(' ');
numbersArray = [];
array.forEach(function(item){
  numbersArray.push(Number(item));
});
let min = Math.min.apply( Math, array );
let max = Math.max.apply( Math, array );
let sum = 0;
  for(var i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i];
    }
let message = `Your numbers are ${string} \n min number: ${min}\n max number: ${max}\n sum of number: ${sum}`;
alert(message)
}
