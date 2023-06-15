import '../styles/style.css';
import {useState} from "react";

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [springCleaning, setSpringCleaning] = useState(false);
    const [fallCleaning, setFallCleaning] = useState(false);
    let [user = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        zipCode: zipCode,
        city: city,
        phoneNumber: phoneNumber,
        email: email,
        springCleaning: springCleaning,
        fallCleaning: fallCleaning,
    }, setUser] = useState();

    const handleFirstName = (e) => {
        const value = e.target.value;
        setFirstName(value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleZipCode = (e) => {
        setZipCode(e.target.value);
    }

    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSpringCleaning = (e) => {
        setSpringCleaning(e.target.checked);
        if (springCleaning === false) {
            setSpringCleaning(true);
        } else {
            setSpringCleaning(false);
        }
        console.log(springCleaning);
    }

    const handleFallCleaning = (e) => {
        setFallCleaning(e.target.checked);
        if (fallCleaning === false) {
            setFallCleaning(true);
        } else {
            setFallCleaning(false);
        }
        console.log(fallCleaning);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user,
            })
        })
        e.preventDefault();
        setUser(user);
        console.log(user);
        console.log('New user added');
    }

    return (
        <div className='form-container'>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <label>First name: </label>
                <input value={firstName} type={"text"} onChange={(e) => handleFirstName(e)}/>
                <label>Last name: </label>
                <input value={lastName} type={"text"} onChange={(e) => handleLastName(e)}/>
                <label>Address: </label>
                <input value={address} type={"text"} onChange={(e) => handleAddress(e)}/>
                <label>Zip code: </label>
                <input value={zipCode} type={"text"} minLength={5} maxLength={5} onChange={(e) => handleZipCode(e)}/>
                <label>City: </label>
                <input value={city} type={"text"} onChange={(e) => handleCity(e)}/>
                <label>Phone number: </label>
                <input value={phoneNumber} type={"tel"} minLength={11} maxLength={11} placeholder={'070-1231231'} onChange={(e) => handlePhoneNumber(e)}/>
                <label>Email address: </label>
                <input value={email} type={"email"} onChange={(e) => handleEmail(e)}/>
                <label>Spring cleaning: </label>
                <input type={"checkbox"} checked={springCleaning} onChange={handleSpringCleaning}/>
                <label>Fall cleaning: </label>
                <input type={"checkbox"} checked={fallCleaning} onChange={handleFallCleaning}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
