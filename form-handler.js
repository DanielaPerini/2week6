function capture (){
  event.preventDefault();
  
  var theName = document.custInfo.name.value
  
  console.log(theName)
  
  var theAge = document.custInfo.age.value
  
  console.log(theAge);
}

function emailCapture(){
  event.preventDefault();
  
  var theEmail = document.signup.email.value
  
  console.log("Thanks for signing up " + theEmail + "!");
}