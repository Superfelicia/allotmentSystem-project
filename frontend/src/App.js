import {Route, Routes} from 'react-router-dom';
import Allotments from "./pages/Allotments";
import {Layout} from "antd";
import SideMenu from "./components/SideMenu";
import UserInfo from "./pages/UserInfo";
import Users from "./pages/Users";
import Modal from "./components/Modal";

function App() {

    return (
        <>
            <Layout style={{height: '100vh', overflow: "auto", position: "fixed", left: 0, top: 0, bottom: 0}}>
                <SideMenu/>
                <Routes>
                    <Route path={"/"} element={<Allotments/>}/>
                    <Route path={"/Users"} element={<Users/>}/>
                    <Route path={"/userInfo"}>
                        <Route index element={<UserInfo/>} />
                        <Route path={":userId"} element={<UserInfo/>} />
                    </Route>
                </Routes>
                <Modal></Modal>
            </Layout>

        </>
    );
}

export default App;
