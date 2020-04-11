var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numberChar = "1234567890"

function generatePrompt(){
    var lengthInput = prompt("Enter the length of the password between 8 and 128 characters");
    if (numberRange (lengthInput)){
     
        alert("You need to enter a number between 8 and 128")
        return;
    }

    else if (numberRange (lengthInput)){
        
    }
    var specialInput = confirm("Include Special Characters?");
    var lowerInput = confirm("Include Lower case letters?");
    var upperInput = confirm("Include Upper case letters?");
    var numberInput = confirm("Include Numbers?");
    var characters = "";

    if (specialInput) {
        (characters += specialChar);
      }

     if (lowerInput){
        (characters += lowerCaseChar);
    }

     if (upperInput){
        (characters += upperCaseChar);
    }

     if (numberInput){
        (characters += numberChar);
    }

    else if (characters == ""){
        alert("You need to select an option to provide you with a random password")
        return;
    }

    var passwordText = document.querySelector("#password");
  
    passwordText.value = passwordLoop(lengthInput, characters);

};

generate.addEventListener("click", generatePrompt);


function passwordLoop(l, characters){
    var pwd = "";
    for (var i = 0; i<l; i++){
      pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
  }

  function numberRange(numberInput){

  if ((numberInput < 8 || numberInput > 128))
  {
    return true;
     } 
    else 
     {
    return false;
  }
}
