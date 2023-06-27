import {useState} from "react";
import {UserSwitchOutlined, HomeOutlined, UserOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {Link} from 'react-router-dom';

const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);


    const items = [
        {
            key: '0',
            path: "/",
            label: "Allotments",
            icon: <HomeOutlined/>,
        },
        {
            key: '1',
            path: "/users",
            label: "Users",
            icon: <UserSwitchOutlined/>,
        },
        {
            key: '2',
            path: "/userInfo",
            label: "User information",
            icon: <UserOutlined/>,
        }
    ].map((item, index) => {
        return {
            key: index,
            label: <Link to={item.path}>{item.label}</Link>,
            icon: item.icon,
        }
    })

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items}/>
            </Sider>
        </>
    );
}

export default SideMenu;