import {Content} from "antd/es/layout/layout";
import Allotments from "./Allotments";
import SideMenu from "../components/SideMenu";
import {Layout} from "antd";
import Users from "./Users";

const Home = () => {

    return (
        <Layout>
            <Layout style={{height: '100vh', overflow: "auto", position: "fixed", left: 0, top: 0, bottom: 0}}>
                <Content>
                <SideMenu />
                <Allotments/>
                <Users/>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Home;