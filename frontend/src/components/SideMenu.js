import {useState} from "react";
import {UserSwitchOutlined, HomeOutlined, UserOutlined} from "@ant-design/icons";
import {Layout, Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {Link} from 'react-router-dom';

const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const getItem = (label, key, icon, children, navigation) => {
    //     return {
    //         key,
    //         icon,
    //         children,
    //         label,
    //         navigation,
    //     };
    // }

    const items = [
        // {
        //     key: 0,
        //     path: "/",
        //     label: "Home",
        //     icon: <HomeOutlined/>,
        // },
        {
            key: '0',
            path: "/",
            label: "Allotments",
            icon: <HomeOutlined/>,
        },
        {
            key: '1',
            path: "/home",
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