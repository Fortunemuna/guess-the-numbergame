  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let chances = 3;

  function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);

    if (isNaN(userGuess) || userGuess< 1 || userGuess > 100) {
      document.getElementById('result').innerHTML ="please enter valid number";
      return; 
    }
    
    chances--;

    if (userGuess === secretNumber){
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Congratulations! You gueesed the correct number!";
        disableInputAndButton();
    }else{
      const hint = userGuess > secretNumber ? "higher":"lower";
      document.getElementById("result").innerHTML = "Your guess is " + hint;
      document.getElementById("chances").innerHTML = chances;    
    }
    if (chances == 0) {
      document.getElementById("result").innerHTML = `Sorry, you've run out of chances. The correct number was ${secretNumber}`;
      disableInputAndButton();
    }
   }


   function disableInputAndButton() {
     document.getElementById("userGuess").disabled = true;
     document.querySelector("button").disabled = true;
   }


   function replay() {
     secretNumber = Math.floor(Math.random() * 100) + 1;  
     chances = 3;

     document.getElementById("userGuess").value = "";
     document.getElementById("result").innerHTML = "";
     document.getElementById("result").style.color = "#e74c3c";
     document.getElementById("chances").innerHTML = chances;
     document.getElementById("userGuess").disabled = false;
     document.querySelector("button").disabled = false;
  }
