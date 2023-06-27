import useFetch from "../useFetch";
import Form from '../components/Form';
import {Table} from "antd";
import Column from "antd/es/table/Column";
import {useState} from "react";
import Modal from '../components/Modal';

const Users = () => {
    const {Column} = Table;
    const {data, loading, error} = useFetch('http://localhost:3001/getAllotmentUser');
    const [selectedUserId, setSelectedUserId] = useState();
    const [userValue, setUserValue] = useState();
    const [showModal, setShowModal] = useState(false);

    if (loading) return <h2>Loading...</h2>

    if (error) console.log(error);

    const filteredUserId = data.reduce((accumulator, current) => {
        if (!accumulator.find((user) => user.userId === current.userId)) {
            accumulator.push(current);
        }
        return accumulator;
    }, [])

    console.log(filteredUserId.map(user => user));

    const handleRowClick = (record) => {
        setSelectedUserId(record.userId);
        setUserValue(record);
        console.log(record);
        setShowModal(true);
    }

    return (
        <div style={{display: "flex", justifyContent: 'center', paddingTop: '30px'}}>
            <Table dataSource={filteredUserId} key={filteredUserId.userId} id={filteredUserId.id} style={{cursor: 'pointer'}}
                   rowKey={(record) => record[filteredUserId.userId]} onRow={(record) => {
                return {
                    onClick: (() => handleRowClick(record)),
                }
            }}>
                <Column title="First Name" dataIndex="firstName" key="firstName"/>
                <Column title="Last Name" dataIndex="lastName" key="lastName"/>
                <Column title="Address" dataIndex="address" key="address"/>
                <Column title="Zip code" dataIndex="zipCode" key="zipCode"/>
                <Column title="City" dataIndex="city" key="city"/>
                <Column title="Phone number" dataIndex="phoneNumber" key="phoneNumber"/>
                <Column title="Email" dataIndex="email" key="email"/>
            </Table>
            {showModal &&
                <Modal title={`${userValue.firstName} ${userValue.lastName}`} closeModal={() => setShowModal(false)} showModal={showModal}>
                    <Form userId={selectedUserId} userValue={userValue}/>
                </Modal>
            }
        </div>
    )
}

export default Users;