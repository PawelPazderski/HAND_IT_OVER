// import React, {useState, useEffect} from 'react'
// import Heading from '../../../components/DecorationHeading'
// import {Link} from 'react-router-dom'

// import HandOverButton from "./../../hand-it-over/HandOverButton"



// const HandOverFormStep2 = ( {chooseStep2, goToStep} ) => {

//     return (
//         <>
//             <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
//             <form>
//                 <div className="step2-group">
//                     <label>Liczba 60l worków:</label>
//                     <select type="select" name="wybierz">
//                             <option value="0">- wybierz -</option>
//                             <option value="1">1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                     </select>
//                 </div>
            
//             </form>
//             <HandOverButton goToStep={goToStep} path="Wstecz" step={1}/>
//             <HandOverButton goToStep={goToStep} path="Dalej" step={3}/>
//         </>
//     )
// }

// export default HandOverFormStep2

import React, { useState } from "react";
import styled from "styled-components";
import HandOverButton from "./../../hand-it-over/HandOverButton"

import './handoverform.scss'

const Main = styled("div")`
    font-family: sans-serif;
    height: 300px;
    display: flex;
`;

const DropDownContainer = styled("div")`
    width: 300px;
`;

const DropDownHeader = styled("div")`
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    font-weight: 500;
    font-size: 1.3rem;
    color: #3C3C3C;
    border: 1px solid #3C3C3C;
    display: flex;
    justify-content:space-between;
    align-items: center;
`;

const DropDownListContainer = styled("div")`
    display: flex;
    justify-content: flex-end;
    `;

const DropDownList = styled("ul")`
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 0;
    margin: 0;
    padding-left: 1em;
    border: 1px solid #3C3C3C;
    box-sizing: border-box;
    color: #3C3C3C;
    font-size: 1.3rem;
    font-weight: 500;
    &:first-child {
        padding-top: 0.8em;
    }
`;

const ListItem = styled("li")`
    color: $primary-yellow;
    list-style: none;
    margin-bottom: 0.8em;
    cursor: pointer;
`;

const ArrowDown = styled("div")`
    height: 20px;
    width: 20px;
    border-color: #737373; 
    border-style: solid;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
`;

const ArrowUp = styled("div")`
    height: 20px;
    width: 20px;
    border-color: #737373; 
    border-style: solid;
    border-width: 3px 0 0 3px;
    transform: translate(0%, 20%) rotate(45deg);
`;

const options = ["1", "2", "3", "4", "5"];

const HandOverFormStep2 = ( {chooseStep2, goToStep, step2} ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <Main>
            <label>Liczba 60l worków:</label>
            <DropDownContainer>
                <DropDownHeader onClick={toggling}>
                {selectedOption || "– wybierz –"}
                {isOpen? <ArrowUp /> : <ArrowDown />}
                </DropDownHeader>
                {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                    {options.map(option => (
                        <ListItem onClick={onOptionClicked(option)} key={option}>
                        {option}
                        </ListItem>
                    ))}
                    </DropDownList>
                </DropDownListContainer>
                )}
            </DropDownContainer>
            </Main>
            <HandOverButton goToStep={goToStep} path="Wstecz" step={1}/>
            <HandOverButton goToStep={goToStep} path="Dalej" step={3}/>
        </>
    );
}

export default HandOverFormStep2