import useFetch from "../useFetch";
import Form from "../components/Form";

const Users = () => {
    const {data, loading, error} = useFetch('http://localhost:3001/getUser');

    if (loading) return <h2>Loading...</h2>

    if (error) console.log(error);

    console.log(data);


    return (
        <div>
            <div>USER</div>
            <Form/>
        </div>
    );
}

export default Users;