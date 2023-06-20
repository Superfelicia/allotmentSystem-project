import useFetch from "../useFetch";
import Form from "../components/Form";

const Users = ({userId}) => {
    const {data, loading, error} = useFetch('http://localhost:3001/getAllotmentUser');
    let allotmentUser;
    let userArray = [];

    if (loading) return <h2>Loading...</h2>

    if (error) console.log(error);

    console.log(data)

    const allotmentUsers = () => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].userId === userId) {
                allotmentUser = data[i];
            }
        }
        userArray.push(allotmentUser);
        console.log(userArray);
    }

    allotmentUsers();


    return (
        <div>
            {userArray.map((user, id) => {
                return (
                    <div key={user.allotmentNumber} id={id}>
                        <p>
                            {user.firstName} {user.lastName}
                        </p>
                        <p>
                            {user.address} {user.zipCode} {user.city}
                        </p>
                        <p>
                            {user.phoneNumber} {user.email}
                        </p>
                    </div>
                )
            })}
        </div>
    );
}

export default Users;