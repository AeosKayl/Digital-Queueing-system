console.log("System is running...");
// Skapar referenspunkter för de element som kommer att behövas för appen
let addToQBtn = document.querySelector("#queue-button");
let vipBtn = document.querySelector("#vip-button");
let removeFirst = document.querySelector("#checkout-button");
let passengerList = document.querySelector(".passenger-list");
let input = document.querySelector("#passenger-name");
let reminderTxt = document.querySelector("#reminder1");
let container = document.querySelector(".container");// bara för att kunna se div-en på konsollen med devtools
let buttonList = [addToQBtn,vipBtn,removeFirst];// en array som innheåller alla knappar.
let passengerNames = [];

console.log(passengerList.childElementCount); // testräknar childElements i passengerList
// en if-sats som styr reminderTxts synlighet.
if(passengerList.childElementCount === 0){
  reminderTxt.style.display = "block";
}

// [addToQBtn,vipBtn,removeFirst], en foreach körs som går igenom alla knappar och gör någonting beroende på knapp
buttonList.forEach((Btn) => {
  Btn.addEventListener("click",(e) =>{ // beroende på vad man klickar på kommer något att hända
    let passenger = input.value; // det som skrivs kommer att sparas i passenger när man klickar

    // kollar om namnet redan existerar i arrayen passengerNames och ger en alert om det gör det
    if(passengerNames.includes(removeSpaces(input.value.toLowerCase())) && (Btn === vipBtn || Btn === addToQBtn)){
      alert("This passenger is already in queue");
      input.value = "";
    }
    else if(passenger !== ""){ // om värdet inte är tomt kommer if-satsen att köras
      // pushar inmatade värdet utan space & i gemener i passengerNames
      passengerNames.push(removeSpaces(input.value.toLowerCase()));
      let newPassenger = document.createElement("li");
      //för att skapa en lämplig id, ersätts alla tomma knapptryckningar med en -, det kan finnas bättre sätt att hantera detta.
      newPassenger.id = removeSpaces(passenger.toLowerCase().replace(' ','-'));
      newPassenger.innerText = passenger;
      
      // console.log(passenger);
      // om man matar in bara tomma rader eller space, alerten visas
      if(!input.value.trim() || !input.value){
        alert("An empty space is not a person and empty spaces can not be counted as persons.");
        input.value = "";
        return false;
      }

      if(Btn === addToQBtn){
        console.log("this queue button works");// knapp test
        passengerList.append(newPassenger);
        input.value = "";
      }
      else if(Btn === vipBtn){
        console.log("this fast-track button works");// knapp test
        passengerList.prepend(newPassenger);
        input.value = "";
      }
      // Else-if en här nedan funkar så länge input fältet är tomt, annars får man error
      // else if(Btn === removeFirst){
      //   console.log("this button works");
      //   passengerList.removeChild(newPassenger);
      // }
    }
    else if(passenger == "" && passengerList.childElementCount > 0){
      if(Btn === removeFirst){
        console.log("this button works");
        passengerList.removeChild(passengerList.firstElementChild);
      }
    }
    else{
      if(Btn === removeFirst && passengerList.childElementCount <1){
        alert("There is no one to check out.");
      }
      else{
        alert("Passenger name must be filled");
      }   
    }
    // denna if-else sats för att säkerställa att meddelandet visas när ett event har skett.
    if(passengerList.childElementCount === 0){
      reminderTxt.style.display = "block";
      passengerNames = []; // rensar arrayen när passengerlist är tom
    }
    else{
      reminderTxt.style.display = "none";
    }

    // funktion för att ta bort alla space-tryckningar i en string
    function removeSpaces(text){
      return text.split(" ").join("");
    }

  })
})