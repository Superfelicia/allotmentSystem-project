import useFetch from "../useFetch";
import {useRef, useState} from "react";
import Form from '../components/Form'
import {Table} from "antd";
import Column from "antd/es/table/Column";

const Home = (props) => {
    const {Column} = Table;
    const {data, loading, error} = useFetch('http://localhost:3001/getAllotmentUser');
    const [selectedUserId, setSelectedUserId] = useState();


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
        setSelectedUserId(record.userId)
        console.log(record.userId);
    }

    const OpenUserInfo = () => {
        console.log(selectedUserId)
        if (!selectedUserId) return;
        return (
            <Form userId={selectedUserId}/>
        )
    }

    return (
        <div style={{display: "flex", justifyContent: 'center', paddingTop: '30px'}}>
            <Table dataSource={filteredUserId} key={filteredUserId.userId} id={filteredUserId.id} style={{cursor: 'pointer'}}
                   rowKey={(record) => record[filteredUserId.userId]} onRow={(record) => {
                return {
                    onClick: (() => handleRowClick(record)),
                }
            }}>
                <Column title="Allotment nr" dataIndex='allotmentNumber' key='allotmentNumber'/>
                <Column title="m2" dataIndex='m2' key='m2'/>
                <Column title="First Name" dataIndex="firstName" key="firstName"/>
                <Column title="Last Name" dataIndex="lastName" key="lastName"/>
                <Column title="Address" dataIndex="address" key="address"/>
                <Column title="Zip code" dataIndex="zipCode" key="zipCode"/>
                <Column title="City" dataIndex="city" key="city"/>
                <Column title="Phone number" dataIndex="phoneNumber" key="phoneNumber"/>
                {/*<Column title="Email" dataIndex="email" key="email"/>*/}
            </Table>
            {selectedUserId &&
                <OpenUserInfo mode={!props.mode} userId={selectedUserId}/>
            }
        </div>
    )
}

export default Home;