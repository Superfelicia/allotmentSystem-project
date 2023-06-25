const Input = (props) => {
    const {label, type = 'text', name, value, onChange} = props;

    return (
        <div className={'form-input-container'}>
            <label className={'input-label'}>{label}:</label>
            <input type={type}
                   name={name}
                   value={value}
                   onChange={onChange}/>
        </div>
    )
}

export default Input;