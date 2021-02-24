import { Button, Space, Card, Avatar } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const url = "https://randomuser.me/api/";
  const [payload, setPayload] = useState({ });
  let updateVal = {}

  const handleFetchUsers = () => {
    axios.get(url)
    .then((res) => {
      updateVal.data = res.data.results[0];
      setPayload({...payload, ...updateVal});
    })
    .then(e => {
      console.log(e)
    })
  }

  const user = payload;
  console.log(user);

  return (
    <div className="App">
      <Button type="primary" onClick={handleFetchUsers}>Fetch Users</Button>
      <div>
        <code>
          {JSON.stringify(payload, null, 5)}
        </code>
      </div>
    </div>
  );
}

export default App;
