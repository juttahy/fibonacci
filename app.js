/* 
Calculate and print Fibonacci numbers until the number is bigger than 1000
*/

const result = document.querySelector('#fibonacci-result');

showFibonacciResults(1000);

function showFibonacciResults(maxNumber) {
  // Fibonaccin alkutilanne
  const numArray = [1,1];

  let lastNumInd;
  let secLastNumInd;
  let sum;
  
  for (let i = 1; numArray[i] < maxNumber; i++) {
    lastNumInd = numArray.length - 1;
    secLastNumInd = lastNumInd - 1;
    sum = numArray[lastNumInd] + numArray[secLastNumInd];
    numArray.push(sum);
  }

  printResults(numArray);

}

function printResults(array) {
  const arrayList = array.join(', ');
  result.textContent = arrayList;
}