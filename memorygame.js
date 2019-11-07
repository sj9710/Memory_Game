//function for generating the random no
function randomNo() {
    let random;
    document.getElementById("randomNo").innerHTML = 
    random = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    let noString = random.toString(); //converting the no into string
    localStorage.setItem('key',noString) //storing the no into the localstorage
    document.getElementById("wait").innerHTML = "Refreshing the page in 5 seconds";
}

//function for refreshing the page after 5 seconds
function timer(){
    setTimeout(() => {
    window.location.href = 'index2.html';
}, 5000);
}

//function to validate the inputs
function validate(){
    let count = 0;
    const localNo = localStorage.getItem("key");
    let len1 = localNo.length;
    let gno = document.getElementById("guessNo").value;
    let len2 = gno.length;
    if(gno==""){
        alert("Enter your guess");
    }
    else if(len2 > len1){
        alert("Length should be 6");
        document.getElementById("result").innerHTML ="";
    }
    else{
        for(let i = 0 ; i < 6 ; i++){
            if(gno.charAt(i) == localNo.charAt(i)){
                count++;
            }
            else{
                document.getElementById("result").innerHTML = `${count} correct guesses`;
            }
        }
        if(count == 6){
            document.getElementById("result").innerHTML = "Bingo You have a sharp memory";
        }
    }
}