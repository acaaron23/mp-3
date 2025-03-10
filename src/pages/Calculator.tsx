import {styled} from "styled-components";
import { useState } from "react";

const CalculatorDiv = styled.div`
    background-color: black;
    padding: 10px;
    border-radius: 15px;
    width: 100%;
    text-align: center;
    justify-content: center;
`;

const JsCalc = styled.p`
    color: red;
    text-align: center;
    font-size: calc(2px + 1.25vw);
    font-weight: bold;

    @media screen and (max-width: 750px) {
        font-size: calc(6px + 1.2vw);
    }
`;

const FirstNumber = styled.input`
    width: 100%;
    padding: 2px;
    margin: 2px 0;
    font-size: calc(2px + 1vw);
    border-radius: 5px;

    @media screen and (max-width: 750px) {
        font-size: calc(6px + 1.2vw);
    }
`;

const SecondNumber = styled.input`
    width: 100%;
    padding: 2px;
    margin: 2px 0;
    font-size: calc(2px + 1vw);
    border-radius: 5px;

    @media screen and (max-width: 750px) {
        font-size: calc(6px + 1.2vw);
    }
`;

const OutputMsg = styled.div`
    margin-top: 5px;
    background-color: lightgray;
    padding: 3px;
    border-radius: 8px;
`;

const Button = styled.button`
    padding: 8px;
    font-size: 10px;
    color: white;
    background-color: orangered;
    border-radius: 15px;

    @media screen and (max-width: 750px) {
        padding: 10px;
    }
`;

const Output = styled.output`
    font-size: calc(2px + 1vw);
    font-weight: bold;
    color: black;

    @media screen and (max-width: 750px) {
        font-size: 15px;
    }
`;

export default function Calculator  () {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [output, setOutput] = useState(0);

    const addition = () => {
        setOutput(Number(firstNumber) + Number(secondNumber));
    };

    const subtraction = () => {
        setOutput(Number(firstNumber) - Number(secondNumber));
    };

    const multiplication = () => {
        setOutput(Number(firstNumber) * Number(secondNumber));
    };

    const division = () => {
        setOutput(Number(firstNumber) / Number(secondNumber));
    };

    const power = () => {
        let result = 1;

        if(Number(secondNumber) < 0) {
            for (let i = 0; i < (Number(secondNumber)*-1); i++) {
                result = Number(firstNumber) * result;
            }
            setOutput(1/result);
        }

        else{
            for (let i = 0; i < Number(secondNumber); i++) {
                result = Number(firstNumber) * result;
            }
            setOutput(result);
        }
    };

    const clearInput = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOutput(0);
    };

    return (
        <CalculatorDiv>
            <JsCalc> Calculator </JsCalc>
            <div>
                <FirstNumber
                    type = "number"
                    placeholder = "First Number"
                    value = {firstNumber}
                    onChange = {(e) => setFirstNumber(e.target.value)}
                />
                <SecondNumber
                    type = "number"
                    placeholder = "Second Number"
                    value = {secondNumber}
                    onChange = {(e) => setSecondNumber(e.target.value)}
                />
            </div>
            <Button onClick={addition}>+</Button>
            <Button onClick={subtraction}>-</Button>
            <Button onClick={multiplication}>*</Button>
            <Button onClick={division}>/</Button>
            <Button onClick={power}>**</Button>
            <Button onClick={clearInput}>Clear</Button>
            <OutputMsg>
                <Output style={{ color: output >= 0 ? 'black' : 'red' }}> {output} </Output>
            </OutputMsg>
        </CalculatorDiv>
    );
}


