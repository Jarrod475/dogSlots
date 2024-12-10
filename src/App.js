import axios from 'axios';
import './App.css';
import Slot from './components/slot';
import React, { useEffect, useState } from "react";


function App() {
  //states for updating images and breed names!
  const [imgArray,setImg] = useState(['/logo192.png','/logo192.png','/logo192.png']);
  const [breedArray,setBreed] = useState(['breed of all breeds','breed of all breeds','breed of all breeds'])

  async function getPics(){
    await axios
    .get("https://dog.ceo/api/breeds/image/random/3")
    
    .then(function (response){
      let dataArray = response.data.message;
      setImg(dataArray);
      setBreed([getBreed(dataArray[0]) , getBreed(dataArray[1]),getBreed(dataArray[2])]);

    })
    .catch(function (error){
      console.log("Axios request came back with error: " ,error);
    }) }
  
    //this pulls the breed from the returned string of the image URL.
   function getBreed(imgString){
    let currentIndex = 30;
    let currentChar = imgString[currentIndex];
    let currentBreed = ""
    while (currentChar !== '/'){
      currentBreed += currentChar;
      currentIndex++;
      currentChar = imgString[currentIndex]
    }
    return(currentBreed);
   }





  return (
    <div className="App">
      <header className="App-header">
        <h1>DOG SLOTS</h1>
        <div className="slotmachine"> 
        <Slot breedtext={breedArray[0]} img={imgArray[0]}/>
        <Slot breedtext={breedArray[1]} img={imgArray[1]}/>
        <Slot breedtext={breedArray[2]} img={imgArray[2]}/>
        </div>
        <button className="slotbtn" onClick={getPics}> GO ! </button>
      </header>
    </div>
  );
}

export default App;
