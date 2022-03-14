import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import InputHeader from './InputHeader'
import Matrix from './Matrix'
import Keyboard from './Keyboard'
import Winner from './Winner'

export default function Wordle() {
    const [userInput, setuserInput] = useState("");
    const [randomString, setrandomString] = useState([]);
    const [datafill, setdatafill] = useState([]);
    const [flag, setflag] = useState(false);
    let [count, setcount] = useState(0);
    let [rowcount, setrowcount] = useState(0);
    const refer = useRef(null);
    
    let [minute, setmin] = useState(0);
    let [sec, setsec] = useState(0);
    const [winnerflag, setwinnerflag] = useState(false);


    useEffect(() => {
        let timer;
        if (flag) {
            timer = setInterval(() => { timerfun() }, 1000);
            function timerfun() {

                setsec(sec + 1);
                if (sec === 59) {

                    setmin(minute + 1);
                    setsec(0);
                }
            }
        }
        return () => clearInterval(timer);
    }, [flag, sec, minute])


    const [keyBoardText, setkeyBoardText] = useState(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]);

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


            setflag(false);


            setwinnerflag(true);
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
            setwinnerflag(false);

            if (rows)
                for (let i = 0; i < 6; i++)
                    refer.current.removeChild(rows[i]);
        }
    }


    return (
        <>
            <InputHeader generateRandomString={generateRandomString} reset={reset} setuserInput={setuserInput} userInput={userInput} />
            
            <div className='container'>

                <Matrix ref={refer} />

                <div className='keyboard'>

                    <Keyboard keyBoardText={keyBoardText} clicked={clicked} enter={enter} deleted={deleted} />

                    { winnerflag && 
                    <Winner winnerflag={winnerflag} minute={minute} sec={sec} />
                    }
                </div>

            </div>

        </>
    )
}
