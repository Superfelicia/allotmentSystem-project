import Form from "./components/Form";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Allotments from "./pages/Allotments";
import Users from "./pages/Users";
import SideMenu from "./components/SideMenu";

function App() {

  return (
      <BrowserRouter>
          <SideMenu />
          <Routes>
              <Route exact path={'/'} element={<Allotments />} />
              <Route path={'/users'} element={<Users />} />
          </Routes>
              <Form/>
      </BrowserRouter>
  );
}

export default App;
