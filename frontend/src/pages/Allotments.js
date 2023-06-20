import TableComponent from "../components/TableComponent";
import useFetch from "../useFetch";
import {useState} from "react";
import UserInfo from "./UserInfo";

const Allotments = () => {
    const {data, loading, error} = useFetch('http://localhost:3001/getAllAllotments');
    const [selectedUserId, setSelectedUserId] = useState();
    const [showUserInfo, setShowUserInfo] = useState(false);

    if (loading) return <h2>Loading...</h2>

    if (error) console.log(error);

    const handleAllotmentClick = (userId) => {
        setSelectedUserId(userId);
    }

    console.log(selectedUserId);

    const OpenUserInfo = ({userId}) => {
        if (!selectedUserId) return;
        return (
            <UserInfo userId={userId}/>
        )
    }

    return (
        <>
            <TableComponent
                onClick={handleAllotmentClick}
                allotments={data}
                allotmentId={selectedUserId}/>
            {selectedUserId && (
                <OpenUserInfo userId={selectedUserId}/>
            )}
        </>
    );
}

export default Allotments;