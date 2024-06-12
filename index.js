const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
let generatedPasswordOne = document.getElementById ("space-one")
let generatedPasswordTwo = document.getElementById ("space-two")
let generatorEl = document.getElementById("generator-el")
let passwordStrenght = document.getElementById("password-strenght")
let copyMessageEl = document.getElementById ("copy-message")
let passwordLength = 15

function random() {
    let password = '';
    for (let i=0; i < passwordLength; i++) {
    let randomCharacter = Math.floor (Math.random() * characters.length)
    password += characters[randomCharacter];
    }
    return password;
}

function generateRandomPasswords () {
    generatedPasswordOne.textContent = '';
    generatedPasswordTwo.textContent = '';
    generatedPasswordOne.textContent += random()
    generatedPasswordTwo.textContent += random()
    copyMessageEl.classList.remove("hidden");
}

generatorEl.addEventListener("click", generateRandomPasswords);

    function copyToClipboard(text) {
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);

    try {
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    } catch (err) {
        console.error("Could not copy text: ", err);
    }
    document.body.removeChild(tempTextArea);
}

generatedPasswordOne.addEventListener("click", () => {
    copyToClipboard(generatedPasswordOne.textContent);
});

generatedPasswordTwo.addEventListener("click", () => {
    copyToClipboard(generatedPasswordTwo.textContent);
});