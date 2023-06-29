import {useEffect, useState} from "react";

const Input = (props) => {
    const {label, type = 'text', name, value, onChange} = props;
    const [val, setVal] = useState(value);

    useEffect(() => {
        setVal(value);
    }, [value])

    const handleChange = (v) => {
        setVal(v.target.value);
        if (onChange) {
            onChange(v.target.value);
        }
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