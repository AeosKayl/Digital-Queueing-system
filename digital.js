console.log("System is running...");
// Skapar referenspunkter för de element som kommer att behövas för appen
let addToQBtn = document.querySelector("#queue-button");
let vipBtn = document.querySelector("#vip-button");
let removeFirst = document.querySelector("#checkout-button");
let passengerList = document.querySelector(".passenger-list");
let input = document.querySelector("#passenger-name");
let reminderTxt = document.querySelector("#reminder1");
let container = document.querySelector(".container");
let buttonList = [addToQBtn,vipBtn,removeFirst];// en array som innheåller alla knappar.


console.log(passengerList.childElementCount); // testräknar childElements i passengerList
// en if-sats som styr reminderTxts synlighet.
if(passengerList.childElementCount === 0){
  reminderTxt.style.display = "block";
}

// [addToQBtn,vipBtn,removeFirst], en foreach körs som går igenom alla knappar och gör någonting beroende på knapp
buttonList.forEach((Btn) => {
  Btn.addEventListener("click",(e) =>{ // beroende på vad man klickar på kommer något att hända
    let passenger = input.value; // det som skrivs kommer att sparas i passenger när man klickar
    if(passenger !== ""){ // om värdet inte är tomt kommer if-satsen att köras
      let newPassenger = document.createElement("li");
      //för att skapa en lämplig id, ersätts alla tomma knapptryckningar med en -, det kan finnas bättre sätt att hantera detta.
      newPassenger.id = passenger.toLowerCase().replace(' ','-');
      newPassenger.innerText = passenger;
      
      // console.log(passenger);

      if(Btn === addToQBtn){
        console.log("this queue button works");
        passengerList.append(newPassenger);
        input.value = "";
      }
      else if(Btn === vipBtn){
        console.log("this fast-track button works");
        passengerList.prepend(newPassenger);
        input.value = "";
      }
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
      }else{
        alert("Passenger name must be filled");
      }   
    }
    // denna if-else sats för att säkerställa att meddelandet visas när ett event har skett.
    if(passengerList.childElementCount === 0){
      reminderTxt.style.display = "block";
    }
    else{
      reminderTxt.style.display = "none";
    }

  })
})

// if(passengerList.childElementCount !== 0){
//   reminderTxt.style.display = "none";
// }
// else{
//   reminderTxt.style.display = "block";
// }
