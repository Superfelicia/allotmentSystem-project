import {useEffect, useState} from "react";
import useFetch from "../useFetch";

const Users = () => {
    const [user, setUser] = useState([]);

    const {data, loading, error} = useFetch('http://localhost:3001/getUser');

    if (loading) return <h2>Loading...</h2>

    if (error) console.log(error);

    console.log(data);


    return (
        <>
            {data.map((users) => {
                return (
                    <div>
                        {users.firstName}
                        {users.lastName}
                        {users.address}
                        {users.zipCode}
                    </div>
                )
            })
            }
        </>
    );
}

export default Users;