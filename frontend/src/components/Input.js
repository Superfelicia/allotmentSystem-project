import {useEffect, useState} from "react";

const Input = (props) => {
    const {label, type = 'text', name, value} = props;

    const [val, setVal] = useState(value);

    console.log(val);

    const handleChange = (v) => {
        setVal(v.target.value);
        // en till funktion för att sätta värdet i form-parenten
    }

    return (
        <div className={'form-input-container'}>
            <label className={'input-label'}>{label}:</label>
            <input type={type}
                   name={name}
                   value={val}
                   onChange={handleChange}
                   className='input'/>
        </div>
    )
}

export default Input;