import {Table} from 'antd';
const TableComponent = (props) => {
    const {Column} = Table;

    const handleRowClick = (record) => {
        props.onClick(record.userId);
        // console.log(record.userId);
    }

    return (
        <div style={{display: "flex", justifyContent: 'center', paddingTop: '30px'}}>
            <Table dataSource={props.allotments} key={props.id} id={props.id} style={{cursor: 'pointer'}} rowKey={(record) => record[props.allotmentId]} onRow={(record) => {
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
        </div>
    );
}
export default TableComponent;