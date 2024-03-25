// import React from "react";

function printNumbersWithLet(): number[] {
    const numbers: number[] = [];
    for (let i: number = 1; i <= 5; i++) {
        // console.log(i); // Logs numbers 1 through 5
        numbers.push(i);
    }
    return numbers;
}



export default function Day24() {
    const numbers = printNumbersWithLet();
    return (
        <div>
            <div>
                <h2>Numbers</h2>
            </div>
            <ul>
                {numbers.map(number => (
                    <li key={number}>{number}</li>
                ))}                
            </ul>
            



        </div>
    )
}