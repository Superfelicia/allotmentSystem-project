import useFetch from "../useFetch";

const AllotmentUsers = ({userId}) => {
    const {data, loading, error} = useFetch('http://localhost:3001/getAllotmentUser');
    let allotmentUser;
    let userArrayWithSameUserId = [];

    if (loading) return <h2>Loading...</h2>

    if (error) console.log(error);

    // console.log(data)

    const allotmentUsers = () => {
        for (let i = 0; i < data.length; i++) {
            allotmentUser = data[i];
            if (data[i].userId === userId) {
                userArrayWithSameUserId.push(allotmentUser);
            }
        }
        // console.log(userArrayWithSameUserId);
    }

    allotmentUsers();

    return (
        <>
            {userArrayWithSameUserId.map((user, id) => {
                return (
                    <div key={user.id} id={id}>
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
        </>
    );
}

export default AllotmentUsers;