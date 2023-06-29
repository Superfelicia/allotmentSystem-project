import '../styles/style.css';
import {useState} from "react";
import Input from "./Input";
const Form = ({userId, userValue}) => {
    const [mode, setMode] = useState(false);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        address: '',
        zipCode: 0,
        city: '',
        phoneNumber: '',
        email: '',
        springCleaning: null,
        fallCleaning: null,
    });
    const [updateUser, setUpdateUser] = useState({...userValue});


    const handleCreateUser = (e) => {
        setMode(true);

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
            .then(response => {
                if (response.ok) {
                    console.log('New user added');
                } else {
                    console.log('Failed to add new user');
                }
            })
            .catch(error => {
                console.error('Error occurred while adding new user:', error);
            });
    }

    const handleUpdateUser = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/updateUser?userId=${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(response => {
                if (response.ok) {
                    console.log('User updated successfully');
                } else {
                    console.log('Failed to update user');
                }
            })
            .catch(error => {
                console.error('Error occurred while updating user:', error);
            });
    }

    const handleDeleteUser = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3001/deleteUser?userId=${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.ok) {
                    console.log('User was deleted successfully');
                } else {
                    console.log('Failed to delete user');
                }
            })
            .catch(error => {
                console.log('Error occurred while deleting user:', error);
            });
    }

    const handleInputChange = (name, value) => {

        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));


        setUpdateUser(prevUpdateUser => ({
            ...prevUpdateUser,
            [name]: value
        }));
    }


    return (
        <>
            <form className='form' onSubmit={mode ? handleCreateUser : handleUpdateUser}>
                <Input name={"firstName"} type={"text"} label={"First name"} value={userValue.firstName}
                       onChange={(value) => handleInputChange("firstName", value)}/>
                <Input name={"lastName"} type={"text"} label={"Last name"} value={userValue.lastName}
                       onChange={(value) => handleInputChange("lastName", value)}/>
                <Input name={"address"} type={"text"} label={"Address"} value={userValue.address}
                       onChange={(value) => handleInputChange("address", value)}/>
                <Input name={"zipCode"} type={"text"} label={"Zip code"} value={userValue.zipCode}
                       onChange={(value) => handleInputChange("zipCode", value)}/>
                <Input name={"city"} type={"text"} label={"City"} value={userValue.city}
                       onChange={(value) => handleInputChange("city", value)}/>
                <Input name={"phoneNumber"} type={"tel"} label={"Phone number"} value={userValue.phoneNumber}
                       onChange={(value) => handleInputChange("phoneNumber", value)}/>
                <Input name={"email"} type={"email"} label={"Email"} value={userValue.email} onChange={(value) => handleInputChange("email", value)}/>

                <div style={{display: "flex", justifyContent: 'space-between', marginTop: '25px'}}>
                    <button type="submit" disabled={true}>{mode ? 'CREATE USER' : 'UPDATE USER'}</button>
                    <button type="submit" onClick={handleDeleteUser}>{'DELETE USER'}</button>
                </div>
            </form>
        </>
    );
}

export default Form;
