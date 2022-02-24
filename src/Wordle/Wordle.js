import React, { useState, useRef, useEffect } from 'react'
import './style.css'
// import Part1 from  './Part1'
// import Part2 from  './Part2'

import { FaBackspace } from 'react-icons/fa'

export default function Wordle() {
    const [userInput, setuserInput] = useState("");
    const [randomString, setrandomString] = useState([]);
    const [datafill, setdatafill] = useState([]);
    const [flag, setflag] = useState(false);
    let [count, setcount] = useState(0);
    let [rowcount, setrowcount] = useState(0);
    const refer = useRef(null);
    const winnerref = useRef(null);
    const gif = useRef(null);
    const timer = useRef(null);
    let [minute, setmin] = useState(0);
    let [sec, setsec] = useState(0);


    useEffect(() => {
        let timer;
        if (flag) {
            timer = setInterval(() => { timerfun() }, 1000);
            function timerfun() {

                setsec(sec + 1);
                if (sec === 59) {
                    console.log("hi");
                    setmin(minute + 1);
                    setsec(0);
                }
            }
        }
        return () => clearInterval(timer);
    }, [flag, sec, minute])


    const keyBoardText = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

    function generateRandomString() {
        //Setting Timer
        setflag(true);

        for (let i = 0; i < userInput; i++) {
            randomString.push(String.fromCharCode((Math.floor(Math.random() * 10) + 65)));
        }
        console.log(randomString);
        setuserInput("");

        createMatrix();
    }

    function createMatrix() {

        for (let i = 0; i < 6; i++) {
            let rows = document.createElement("div");
            rows.classList.add("row");
            for (let j = 0; j < randomString.length; j++) {
                var cols = document.createElement("div");
                cols.classList.add("col");
                cols.dataset.rowNumber = i;
                cols.dataset.colNumber = j;

                rows.appendChild(cols);


            }
            refer.current.appendChild(rows);
        }
    }

    function clicked(value) {

        let currentrow = document.querySelectorAll(`[data-row-number="${rowcount}"]`);
        if (count < randomString.length) {

            datafill.push(value);
            currentrow[count].innerText = value;

            if (randomString.includes(value)) {
                if (randomString.indexOf(value) === count)
                    currentrow[count].style.backgroundColor = "#7AFA7F";
                else
                    currentrow[count].style.backgroundColor = "#C9D74A";
            }
            else
                currentrow[count].style.backgroundColor = "#C3C3C3";

            setcount(count + 1);
        }
    }


    function deleted(value) {
        let currentrow = document.querySelectorAll(`[data-row-number="${rowcount}"]`);
        if (count > 0) {
            datafill.pop();
            currentrow[count - 1].style.backgroundColor = "white";
            currentrow[count - 1].innerText = "";
            setcount(count - 1);
        }
    }

    function enter() {

        if (count === randomString.length && count !== 0) {
            setrowcount(rowcount + 1);
            setcount(0);
            checkwinner(datafill);  /*IMP*/
            setdatafill([]);
        }

    }

    function checkwinner(arr) {
        if (arr.length === randomString.length && arr.join("-") === randomString.join("-")) {
            winnerref.current.style.display = "block";
            gif.current.style.display = "block";

            setflag(false);
            timer.current.style.display = "block";
        }
    }

    function reset() {
        let rows = document.querySelectorAll(".row");
        if (rows.length !== 0) {
            setrandomString([]);
            setdatafill([]);
            setcount(0);
            setrowcount(0);
            setmin(0);
            setsec(0);
            setflag(false);
            winnerref.current.style.display = "none";
            gif.current.style.display = "none";
            timer.current.style.display = "none";
            if (rows)
                for (let i = 0; i < 6; i++)
                    refer.current.removeChild(rows[i]);
        }
    }


    return (
        <>

            <div className='userinput'>
                <h2>Wordle</h2>
                <br />
                <input type="text" value={userInput} onChange={(e) => setuserInput(e.target.value)} placeholder="Enter a Number" />
                <button className="wordlebutton" onClick={generateRandomString}>Submit</button>
                <button className="wordlebutton" onClick={reset}>Reset</button>
            </div>

            {/* <Part1 generateRandomString={generateRandomString} reset={reset} data={userInput}/> */}

            {/* Middle content  */}
            <div className='container'>
                <div className='matrix' ref={refer}>
                    {/* MATRIX */}
                </div>


                <div className='keyboard'>
                    <div className='alphabets'>
                        {
                            keyBoardText.map((ele, index) => {
                                return <button key={index} className="alphabuttons" onClick={() => clicked(ele)}>{ele}</button>
                            })
                        }
                    </div>


                    <div className="click">
                        <button className="alphabuttons" onClick={() => enter("Enter")}><b>Enter</b></button>
                        <button className="alphabuttons" onClick={() => deleted(-100)}><FaBackspace /></button>
                    </div>


                    {/* Winner part */}
                    <div className='winner' >
                        <h1 ref={winnerref}>Winner</h1>
                        <p><img ref={gif} src="images/excited.gif" /></p>
                        <p ref={timer} style={{ display: "none" }}>Your new Record is {minute < 10 ? "0" + minute : minute}:{sec < 10 ? "0" + sec : sec}</p>
                    </div>

                </div>
            </div>

        </>
    )
}
