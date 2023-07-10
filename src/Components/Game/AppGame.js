import React, { useContext } from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import './game.css';
import {ThemeContext } from '../../Context.js';

export default function AppGame() {
    const [dice,setDice]=React.useState(allNewDice());
    const [tenzies,setTenzies]=React.useState(false);

    const {theme} = useContext(ThemeContext);
    const sectionClass=theme;

    function allNewDice(){
        const numbers = [];
        for (let i = 0; i < 10; i++) {            
            numbers.push(generateNewDie());
        }        
        return numbers;
    }

    function generateNewDie(){
        return{
            number:Math.floor(Math.random() * 6) + 1,
            isHeld:false,
            id:nanoid()
        }
    }

    function holdDie(id){
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {id:die.id, number:die.number, isHeld: !die.isHeld} : // spread operator isn't working somehow
                die
        }))
    }

    function rollDice(){
        if(tenzies){
            setTenzies(false);
            setDice(allNewDice());
        }
        setDice(oldDice => oldDice.map(die => {
            return !die.isHeld ? 
                generateNewDie():
                die
        }))        
    }

    const diceElements=dice.map((die)=>{
        return <Die 
                    key={die.id} 
                    number={die.number}  
                    isHeld={die.isHeld}
                    holdDie={()=>holdDie(die.id)}
                />
    })

    React.useEffect(
        ()=>{            
            let win=true;
            for(var i=0;i<dice.length;i++){
                let currDie=dice[i];
                if(currDie.number!==dice[0].number || !currDie.isHeld) win=false
            }
            if(win) setTenzies(true);            
        },
        [dice]
    )
    
    return (
        
        <section id="main" className={sectionClass}>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <section className="dice-container">                
                {diceElements}
            </section>
            
            <button 
                className="roll-dice" 
                onClick={rollDice}>
                    {tenzies?"New Game":"Roll"}
            </button>

            {tenzies && 
                <Confetti 
                    width={document.getElementById("main").offsetWidth}                     
                />}
        </section>
    )
}