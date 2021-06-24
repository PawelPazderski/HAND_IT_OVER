import React, { useState } from "react";
import styled from "styled-components";
import HandOverButton from "./../../hand-it-over/HandOverButton"

import './handoverform.scss'

const Main = styled("div")`
    font-family: sans-serif;
    height: fit-content;
    display: flex;
    
`;

const DropDownContainer = styled("div")`
    width: 300px;
    position: relative;
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
    position: absolute;
    top: 70px;
    left: 0;
    z-index: 2;
    background-color: rgb(245, 245, 240);
    `;

const DropDownList = styled("ul")`
    display: flex;
    flex-direction: column;
    width: 300px;
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

const options = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];
const groups = ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosparwnym", "osobom starszym"];

const HandOverFormStep3 = ( {chooseLocalization, selectGroups, goToStep, localization, helpGroups, getSpecificOrganization, specificOrg} ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        chooseLocalization(value)
    };

    return (
        <>
            <h2 style={{marginTop: "40px"}}>Lokalizacja:</h2>
            <Main>
                <DropDownContainer>
                    <DropDownHeader onClick={toggling}>
                        { localization ? localization : (selectedOption || "– wybierz –") }
                        { isOpen ? <ArrowUp /> : <ArrowDown /> }
                    </DropDownHeader>
                    { isOpen 
                    && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options.map( option => (
                                <ListItem onClick={onOptionClicked(option)} key={option}>
                                    {option}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                    )
                    }
                </DropDownContainer>
            </Main>
            <h3 className="step3-title-low" style={{marginTop: "40px"}}>Komu chcesz pomóc?</h3>
            <div className="checkbox-container">
                <ul>
                    {groups.map(( item, i ) => (
                        <li className={helpGroups.includes(item) ? "help-group-checked" : null} key={i}>
                            <label className="checkbox-label">{item}
                                <input 
                                    className="step3-input" 
                                    value={item} 
                                    type="checkbox" 
                                    onChange={selectGroups} 
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
                <h3 className="step3-title-low" style={{marginTop: "40px"}}>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                <input 
                    className="step3-text-input" 
                    type="text" 
                    value={specificOrg} 
                    onChange={getSpecificOrganization} 
                />
            <div>
                <HandOverButton goToStep={goToStep} path="Wstecz" step={2}/>
                <HandOverButton goToStep={goToStep} path="Dalej" step={4}/>
            </div>
        </>
    );
}

export default HandOverFormStep3