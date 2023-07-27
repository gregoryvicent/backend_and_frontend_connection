import { useEffect, useState } from 'react'

import UserBox from './components/UsersBox'
import CreateUser from './components/CreateUser'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://172.19.0.3:8000/api/users')
      .then(res => res.json())
      .then(res => setUsers(res))
  }, [])
  return (
    <main>

      <h1>Frontend and Backend APP</h1>

      <CreateUser />

      { 
        users.map(user => (
          <UserBox name={user.name} password={user.password} id={user.id} key={user.id} />
        ))
      }

    </main>
  );
}

export default App;
