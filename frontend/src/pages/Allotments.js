import TableComponent from "../components/TableComponent";
import useFetch from "../useFetch";
import {useState} from "react";
import UserInfo from "./UserInfo";
import Modal from '../components/Modal';

const Allotments = () => {
    const {data, loading, error} = useFetch('http://localhost:3001/getAllAllotments');
    const [selectedUserId, setSelectedUserId] = useState();
    const [showModal, setShowModal] = useState(false);

    if (loading) return <h2>Loading...</h2>

    if (error) console.log(error);

    const handleAllotmentClick = (userId) => {
        setSelectedUserId(userId);
        setShowModal(true);
    }

    return (
        <>
            <TableComponent
                onClick={handleAllotmentClick}
                allotments={data}
                allotmentId={selectedUserId}/>
            {showModal &&
                <Modal closeModal={() => setShowModal(false)} showModal={showModal}>
                    <UserInfo userId={selectedUserId} />
                </Modal>
            }
        </>
    );
}

export default Allotments;