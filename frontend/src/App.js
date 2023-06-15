import Form from "./components/Form";
import {useEffect, useState} from "react";

function App() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('http://localhost:3001/getUser');
            const data = await res.json();
            console.log(data);
            setUser(data);
        }
        fetchUser()
            .catch(console.error);
    }, [])


    console.log(user)

  return (
      <>
          <div>
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
