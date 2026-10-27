import './App.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const buttonclick = ()=> {
    if(username === actualusername && password === actualpassword) {
      alert("Logged in successfully")
      navigate("/home")
    } else {
      alert("Wrong credentials")
    }
    // My Solution
    // if(username != actualusername && password != actualpassword) {
    //   console.log(username, password)
    // } else {
    //   alert("Logged in successfully")
    // }
  }
  const actualusername = "admin"
  const actualpassword = "p4$$w0rD"
  return (
    <div className="App">
      <div className="App-header">
        <h1 className='mydiv'>Login Screen</h1>
        <div className="logindiv">
          <label>Username</label>
          <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
          <label>Password</label>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
          <button onClick={buttonclick}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
