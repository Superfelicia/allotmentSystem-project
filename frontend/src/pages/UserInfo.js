import useFetch from "../useFetch";
import Users from "./Users";

const UserInfo = ({userId}) => {
    const {data, loading, error} = useFetch(`http://localhost:3001/getAllotmentsByUserId?userId=${userId}`);

    if (loading) return <h2>Loading...</h2>;

    if (error) {
        console.log(error);
        return <h2>Error occurred while fetching data</h2>;
    }

    // console.log(data);

    return (
        <>
            <div className='user-info-container'>
                {data && data.length > 0 ? (
                    <div>
                        {data.map((allotment) => (
                            <div key={allotment.id} id={userId}>
                                <div style={{display:"flex", flexDirection: 'row', alignItems: "center"}}>
                                    <h2>User id: {userId} </h2>
                                    <h3> m2: {allotment.m2} </h3>
                                    <h3> allotment number: {allotment.id}</h3>
                                </div>
                                <Users userId={userId}/>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h2>No data available</h2>
                )}
            </div>
        </>

    )
}

export default UserInfo;