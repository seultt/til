// 3) 짝수와 홀수

// evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd에 코드를 작성하라.

// 단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.

// if문
function evenOrOdd(num) {
  // num은 1이상의 정수??

  // num이 짝수 일 경우 'Even', 홀수 일경우 'Odd'
  if(num % 2 === 0){
    console.log('Even');
  } else if(num % 2 === 1) {
    console.log('Odd');
  };
}

evenOrOdd(2);


// 3항 연산자
function evenOrOdd(num) {
 var num = (num%2 === 0)? "Even" : "Odd";
 console.log(num);
}

console.log(evenOrOdd(1))