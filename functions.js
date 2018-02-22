function firstFunc(){
  console.log("im a function");
}

firstFunc();


function helloThere(){
  var name = prompt("What is your name?");
  console.log("hello there "+name);
}

helloThere();

//function evens(){
//  for(var i = 10; i <=20; i++)
//    if(i%2 ==0)
//     console.log(i);
//}

//evens();

function square(number){
  console.log(number * number);
}

square(5);

function evens(baseNum){
  //log the next 10 even numbers (numreos pares)
  console.log("we're starting!");
  if(baseNum % 2 == 1){
    baseNum = baseNum + 1;
  }
  for (var i = baseNum; i <baseNum + 20; i = i +2){
    if(i%2 == 0){
      console.log(i)
    }
  }
}

evens(12)
