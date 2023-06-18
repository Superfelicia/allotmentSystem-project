import {Space, Table} from 'antd';
const TableComponent = (props) => {
    const {Column} = Table;

    console.log(props.allotments);

    const data = [
        {
            key: '1',
            allotment: '1',
            m2: 'allotment?.m2',
            // firstName: '',
            // lastName: user?.lastName,
            // zipCode: user?.zipCode,
            // city: user?.city,
            // phoneNumber: user?.phoneNumber,
            // email: user?.phoneNumber,
        },
    ];
    console.log(data);


    return (
        <Table dataSource={props.allotments}>
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
    );
}
export default TableComponent;