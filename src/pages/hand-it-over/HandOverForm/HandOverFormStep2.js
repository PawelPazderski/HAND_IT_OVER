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
    width: 25%;
    padding: 0;
    margin: 0;
    padding-left: 1em;
    border-right: 1px solid #3C3C3C;
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
    border-bottom: 1px solid transparent;
    &:hover {
        color: #FAD648;
        border-bottom: 1px solid #3C3C3C;
    }
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

const HandOverFormStep2 = ( {chooseBags, goToStep, bags} ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        chooseBags(value)
    };

    return (
        <>
            <h1 className="hand-over-form-title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <Main>
            <label>Liczba 60l worków:</label>
            <DropDownContainer>
                <DropDownHeader onClick={toggling}>
                    { bags ? bags : (selectedOption || "– wybierz –") }
                    { isOpen ? <ArrowUp /> : <ArrowDown /> }
                </DropDownHeader>
                { isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                    {options.map(option => (
                        <ListItem className="step2-input" onClick={onOptionClicked(option)} key={option}>
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