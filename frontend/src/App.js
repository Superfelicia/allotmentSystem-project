import Form from "./components/Form";
import {useEffect, useState} from "react";
import Sider from "antd/es/layout/Sider";
import {Layout, Menu} from "antd";

function PieChartOutlined() {
    return null;
}

function DesktopOutlined() {
    return null;
}

function UserOutlined() {
    return null;
}

function TeamOutlined() {
    return null;
}

function FileOutlined() {
    return null;
}

function App() {
    const [user, setUser] = useState([]);
    const [allotment, setAllotment] = useState([]);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('http://localhost:3001/getUser');
            const resAllot = await fetch('http://localhost:3001/getAllotment');
            const data = await res.json();
            const allotData = await resAllot.json();
            console.log(data);
            console.log(allotData);
            setUser(data);
            setAllotment(allotData);
        }
        fetchUser()
            .catch(console.error);
    }, [])

    console.log(user)

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('User', 'sub1', <UserOutlined />, [
            getItem('Tom', '3'),
            getItem('Bill', '4'),
            getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined />),
    ];

  return (
      <>
          <div>
              <Layout style={{minHeight: '100vh'}}>
                  <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                      <div className="demo-logo-vertical" />
                      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
                  </Sider>
              </Layout>
              <Form/>
              {user.map((users) => {
                  return (
                      <div>
                          {users.firstName}
                          {users.lastName}
                          {users.address}
                          {users.zipCode}
                      </div>
                  )
              })
              }
          </div>
      </>
  );
}

export default App;
