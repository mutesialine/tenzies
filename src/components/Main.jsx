import { useEffect, useState } from "react";
import DieCard from "./DieCard";
import { nanoid } from "nanoid";
import Confetti from "react-confetti"

export default function Main(){

  const[dice,setDice]=useState(generateRandomDie())
  const [tenzies, setTenzies]=useState(false)
  useEffect(()=>
  {
    const allheld =dice.every((die)=> die.isSelected===true)
    const firstValueHeld=dice[0].value
    const allSameHeldValue=dice.every((die)=> die.value=== firstValueHeld)
    if (allSameHeldValue && allheld){
      setTenzies(true)
    }

  },[dice])
  function holdDie(id){
    setDice(prevDice=> prevDice.map(die=>{
      return die.id === id ? { ...die, isSelected :!die.isSelected } : die;
    }))
  }
  function getDice(){
    if(!tenzies){
     setDice((prevDice) =>
       prevDice.map((die) => {
         return die.isSelected ? die : generateNewDice();
       })
     );
    }
    else {
      setTenzies(false)
      setDice(generateRandomDie())
    }
    
  }
  function generateRandomDie(){
    const allDie=[]
     for( let i=0; i<10 ; i++){
     allDie.push(
       generateNewDice()
      );
     }
    return allDie
  }

  function generateNewDice(){
    return{
     value:Math.ceil(Math.random() * 6),
      id: nanoid(),
      isSelected:false
    }
      }
   const randomdie =dice.map((die )=> {
     return <DieCard value={die.value} key={die.id} isSelected={die.isSelected} isHold={()=>holdDie(die.id)}/>
  } )

  return (
    <div className=" w-full pt-32">
      {tenzies && <Confetti/>}
      <div className=" max-w-lg mx-auto">
        <div className="bg-white px-14 py-12">
          <div className=" bg-darkblue px-7 py-8">
            <div className=" bg-lightyellow rounded-lg">
              <div className="flex flex-col items-center justify-center px-8 py-16 gap-y-6 w-90 h-90 text-center">
                <h2 className="text-2xl text-darkblue font-bold">Tenzies</h2>
                <p>
                  Roll until all dice are the same. Click each die to freeze it
                  at its current value between rolls.
                </p>
                <div className="grid grid-cols-5 place-items-center gap-4">
                {
                  randomdie
                }
                </div>
                <button className="bg-blue-700 rounded-md py-2 px-8 w-fit text-white" onClick={getDice}>
                { tenzies? "New Game" : "Roll"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}