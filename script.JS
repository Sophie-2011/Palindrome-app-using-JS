function A(String){

var replace=String.replace(/[^A-Z0-9]/ig, "").toLowerCase();


var revers=replace.split("").reverse("").join("");


if(replace===revers){
    document.write("<h2>" + String + " is a palindome")
}
else{
document.write("<h2>" + String + " is not a palindome")
}




}



var input=prompt("Enter your word");
A(input)