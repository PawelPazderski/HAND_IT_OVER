import React, {useState, useEffect} from 'react'

import app from "../../../firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

import HandOverFormStep1 from './HandOverFormStep1'
import HandOverFormStep2 from './HandOverFormStep2'
import HandOverFormStep3 from './HandOverFormStep3'
import HandOverFormStep4 from './HandOverFormStep4'
import HandOverFormSummary from './HandOverFormSummary'
import HandOverFormThankYou from './HandOverFormThankYou'

import './handoverform.scss'

const HandOverForm = () => {
    const [ activeUser, setActiveUser ] = useState(null)
    const [ step, setStep ] = useState(1)
    const [ stepInfo ] = useState([
        {info: "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."},
        {info: "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."},
        {info: "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."},
        {info: "Podaj adres oraz termin odbioru rzeczy."}
    ])
    const [type, setType] = useState([])
    const [bags, setBags] = useState("")
    const [localization, setLocalization] = useState("")
    const [helpGroups, setHelpGroups] = useState([])
    const [specificOrg, setSpecificOrganization] = useState("")
    const [addressErr, setAddressErr] = useState([])
    const [address, setAddress] = useState({
        street: "",
        city: "",
        postCode: "",
        phone: ""
    })
    const [term, setTerm] = useState({
        date: "",
        time: "",
        note: ""
    })

    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid;
            setActiveUser(user.email)
        } else {
            // User is signed out

            setActiveUser(null)
        }
        });

    useEffect(()=>{

        async function addToCollection () {
            try {
                const docRef = await addDoc(collection(getFirestore(app), "user-forms"), {
                    user: activeUser,
                    type,
                    bags,
                    localization,
                    helpGroups,
                    address,
                    term
                    });
                
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
            }
        }

        if ( Number(step) === 6) {
            addToCollection()
            clearForm()
        } else {
            return
        }

    }, [step])

    const clearForm = () => {
        setActiveUser(null);
        setType([]);
        setBags("");
        setLocalization("");
        setHelpGroups([]);
        setAddress({
            street: "",
            city: "",
            postCode: "",
            phone: ""
        });
        setTerm({
            date: "",
            time: "",
            note: ""
        })
    }

    const chooseType = e => {
        if (type.includes(e.target.value)) {
            setType(prev => prev.filter(el => el != e.target.value) )
        } else {
            setType(prev => [...prev, e.target.value])
        }
        
        
    }

    const chooseBags = value => {
        setBags(value);
    }

    const chooseLocalization = value => {
        setLocalization(value);
    }

    const handleAddressError = (value) => {
        setAddressErr( prev => [...new Set([...prev, value])])
    }

    const clearAddressError = (value) => {
        setAddressErr( prev => [...prev].filter( el => el !== value))
    }

    const handleAddress = e => {
        setAddress((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleTerm = e => {
        setTerm((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const selectGroups = e => {
        if (e.target.checked) {
            setHelpGroups( prev => [...new Set([...prev, e.target.value])])
        } else {
            setHelpGroups( prev => [...prev].filter( el => el !== e.target.value))
        }
    }

    const getSpecificOrganization = e => {
        setSpecificOrganization(e.target.value)
    }

    const goToStep = (e) => {
        e.preventDefault()
        if (!type.length) {
            alert("Zaznacz conajmniej jedną z opcji!")
            return
        }
        if ( Number(step) === 2 && !bags.length ) {
            alert("Podaj ilość worków!")
            return
        }
        if ( Number(step) === 3 && !localization.length && !specificOrg.length) {
            alert("Podaj lokalizację lub wskaż konkretną organizację!")
            return
        }
        if ( Number(step) === 3 && !helpGroups.length) {
            alert("Wybierz conajmniej jedną grupę docelową!")
            return
        }
        if ( Number(step) === 4 && (!address.street || !address.city || !address.postCode || !address.phone)) {
            alert("Wypełnij wszystkie pola adresowe!")
            return
        }
        if ( Number(step) === 4 && addressErr.length) {
            alert("Wypełnij wszystkie pola adresowe!")
            return
        }
        if ( Number(step) === 4 && (!term.date || !term.time)) {
            alert("Podaj datę i godzinę odbioru!")
            return
        }
        setStep(e.target.value)
    }

    return (
    <>
        { (step > 0 && step <= 4) 
            && 
            <div className="handover-yellow-belt">
                <h2>Ważne!</h2>
                {(step > 0 && step <= 4) && <h4>{stepInfo[step-1].info}</h4>}
            </div>
        }
        <div className="handover-form-container">
            { (step > 0 && step <= 4) && <h5>Krok {step}/4</h5> }
            { Number(step) === 1 
            && 
            <HandOverFormStep1 
                type={type} 
                goToStep={goToStep} 
                chooseType={chooseType} />}
            { Number(step) === 2 
            && 
            <HandOverFormStep2 
                bags={bags} 
                goToStep={goToStep} 
                chooseBags={chooseBags} />}
            { Number(step) === 3 
            && 
            <HandOverFormStep3 
                helpGroups={helpGroups} 
                specificOrg={specificOrg} 
                localization={localization} 
                selectGroups={selectGroups} 
                goToStep={goToStep} 
                chooseLocalization={chooseLocalization} 
                getSpecificOrganization={getSpecificOrganization} />}
            { Number(step) === 4 
            && 
            <HandOverFormStep4  
                handleAddress={handleAddress}
                handleAddressError={handleAddressError}
                clearAddressError={clearAddressError}
                handleTerm={handleTerm}
                goToStep={goToStep}
                address={address}
                term={term}  
                />}
                { Number(step) === 5 
                && 
                <HandOverFormSummary
                    type={type}
                    bags={bags}
                    helpGroups={helpGroups}
                    localization={localization}
                    specificOrg={specificOrg}
                    address={address}
                    term={term}  
                    goToStep={goToStep} 
                    />}
                { Number(step) === 6 
                && 
                <HandOverFormThankYou />}
        </div>
    </>
    )
}
    
export default HandOverForm