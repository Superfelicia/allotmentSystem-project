import {Route, Routes} from 'react-router-dom';
import Allotments from "./pages/Allotments";
import Users from "./pages/Users";
import {Layout} from "antd";
import SideMenu from "./components/SideMenu";

function App() {

    return (
        <>
            <Layout style={{height: '100vh', overflow: "auto", position: "fixed", left: 0, top: 0, bottom: 0}}>
                <SideMenu/>
                <Routes>
                    <Route path={'/'} element={<Allotments/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                </Routes>
            </Layout>

        </>
    );
}

export default App;
