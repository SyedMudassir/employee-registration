import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();
  const submit = () => {
    if (username === '' && password === '') {
      alert('Please Fill the Fileds')
    }
    else if (props.getData.length === 0) {
      alert('Please Signup First');
      navigateTo('/signup')
    }
    else if (username !== '' && password !== '') {
      props.getData.find(e => {
        return e.username === username && e.password === password ? navigateTo('/welcome') : alert('User not exist')
      })
    }
  }

  return (
    <div className='form-container'>
      <input type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='User Name' />
      <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
      <button className='submit-btn' onClick={submit}>Signin</button>
    </div>
  )
}

export default Login