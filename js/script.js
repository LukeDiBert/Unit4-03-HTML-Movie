function MovieRater(){
  var age = document.getElementById("usertemp").value;
  var result = document.getElementById("result");
  if (age >= 17){
    result.innerHTML = "You can see R rated movies alone";
  }
  else if (age >= 13){
    result.innerHTML = "You can see PG-13 rated movies alone";
  }
else if (age >= 5){
  result.innerHTML = "You can see G or PG rated movies alone";
}
else if (age < 0){
  result.innerHTML = "Please insert a valid age";
  }
  else if (age == ""){
  result.innerHTML = "Please enter your age";
  }
}

