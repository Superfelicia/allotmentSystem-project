import Form from "./components/Form";
import {useEffect, useState} from "react";
import Sider from "antd/es/layout/Sider";
import {Layout, Menu} from "antd";
import {ClearOutlined, HomeOutlined, UserOutlined} from '@ant-design/icons';

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
    console.log(allotment)

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem('Allotments', '1', <HomeOutlined />),
        getItem('User', 'sub1', <UserOutlined />, [
            getItem('Tom', '3'),
            getItem('Bill', '4'),
            getItem('Alex', '5'),
        ]),
        getItem('Cleaning', '2', <ClearOutlined />),
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
