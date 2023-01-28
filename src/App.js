// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  async function registerHandel(e) {
    e.preventDefault()
    const res = await fetch("http://localhost:8000/user", {
      method: 'POST',
      body: JSON.stringify({
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      }),
    })
    const data = await res.json()
    console.log(data);
  }
  return (
    <div className="App">
      <h1>Register</h1>
      <div>
        <form onSubmit={registerHandel}>
          <input value={name}
            type='text'
            onChange={(e) => setname(e.target.value)}
          />
          <input value={email}
            type="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input value={password}
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <input type="submit" value="register" />
        </form>

      </div>
    </div>
  );
}

export default App;
