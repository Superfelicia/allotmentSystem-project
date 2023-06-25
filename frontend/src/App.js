import {Route, Routes} from 'react-router-dom';
import Allotments from "./pages/Allotments";
import {Layout} from "antd";
import SideMenu from "./components/SideMenu";
import UserInfo from "./pages/UserInfo";
import Home from "./pages/Home";

function App() {

    return (
        <>
            <Layout style={{height: '100vh', overflow: "auto", position: "fixed", left: 0, top: 0, bottom: 0}}>
                <SideMenu/>
                <Routes>
                    <Route path={"/"} element={<Allotments/>}/>
                    <Route path={"/Home"} element={<Home/>}/>
                    <Route path={"/userInfo"}>
                        <Route index element={<UserInfo/>} />
                        <Route path={":userId"} element={<UserInfo/>} />
                    </Route>
                </Routes>
            </Layout>

        </>
    );
}

export default App;
