import {useState} from "react";
import {ClearOutlined, HomeOutlined, UserOutlined} from "@ant-design/icons";
import {Layout, Menu} from "antd";
import Sider from "antd/es/layout/Sider";
const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const getItem = (label, key, icon, children) => {
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
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
                </Sider>
            </Layout>
        </>
    );
}

export default SideMenu;