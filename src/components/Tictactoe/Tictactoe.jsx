import React, { useRef, useState } from 'react'
import './Tictactoe.css'
import circle_icon from '../assets/o.png'
import cross_icon from '../assets/x.png'

let data=["","","","","","","","",""];

const Tictactoe = () => {

let [count,setCount]= useState(0);
let [lock,setLock]=useState(false);
let titleRef = useRef(null);
let box1=useRef(null);
let box2=useRef(null);
let box3=useRef(null);
let box4=useRef(null);
let box5=useRef(null);
let box6=useRef(null);
let box7=useRef(null);
let box8=useRef(null);
let box9=useRef(null);

let boxarray=[box1,box2,box3,box4,box5,box6,box7,box8,box9];


  const toggle=(e,num)=>{
  if (lock || data[num]) return;

  if(count%2===0){
   e.target.innerHTML=`<img src='${cross_icon}'>`;
   data[num]="x";
  }
  else{
    e.target.innerHTML=`<img src='${circle_icon}'>`;
   data[num]="o";
  }
  setCount(count+1);
  checkWinOrDraw();
}

const checkWin=(data)=>{
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
   return winningCombinations.some(
    ([a,b,c])=> data[a]&& data[a]===data[b] && data[a]===data[c]);

};


const checkWinOrDraw = () => {
  if (checkWin(data)) {
    setLock(true);
    const winner = count % 2 === 0 ? "x" : "o";
    titleRef.current.innerHTML = `Congratulations: <img src=${
      winner === "x" ? cross_icon : circle_icon
    }> wins!`;
  } else if (data.every((cell) => cell === "x" || cell === "o")) {
    setLock(true);
    titleRef.current.innerHTML = `Nobody Won: Try Again!`;
  }
};

const reset=()=>{
  setLock(false);
  data=["","","","","","","","",""];
  titleRef.current.innerHTML='Play, Win, Repeat: Tic Tac Toe <span>React</span>  Edition!';
  boxarray.forEach((box) => (box.current.innerHTML = ""));
  setCount(0);
}


  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>Play, Win, Repeat: Tic Tac Toe <span>React</span>  Edition!</h1>
       <div className="board">
          <div className="row1">
            <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
            <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
            <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
          </div>
          <div className="row2">
            <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
            <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
            <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
          </div>
          <div className="row3">
            <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
            <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
            <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
          </div>
       </div>
       <button className='reset' onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default Tictactoe