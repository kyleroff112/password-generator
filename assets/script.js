var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specChar = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+",";","|",":","/","?",".",">",",","<"];
var nums = [0,1,2,3,4,5,6,7,8,9];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
    var passLength = prompt("How many characters would you like your password to be? (8-128)");
    if (passLength < 8 || passLength > 128) {
        alert("Password must be between 8 and 128 characters");
        return;
    }
    var upperCaseConfirm = confirm("Would you like to include uppercase letters?");
    var lowerCaseConfirm = confirm("Would you like to include lowercase letters?");
    var specCharConfirm = confirm("Would you like to include special characters?");
    var numsConfirm = confirm("Would you like to include numbers?");
    if (!upperCaseConfirm && !lowerCaseConfirm && !specCharConfirm && !numsConfirm) {
        alert("You must select at least one character type");
        return;
    }
    var password = "";
    var charSet = [];
    if (upperCaseConfirm) {
        charSet = charSet.concat(upperCase);
    }
    if (lowerCaseConfirm) {
        charSet = charSet.concat(lowerCase);
    }
    if (specCharConfirm) {
        charSet = charSet.concat(specChar);
    }
    if (numsConfirm) {
        charSet = charSet.concat(nums);
    }
    for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    }