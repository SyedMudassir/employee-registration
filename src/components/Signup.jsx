import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
  const [user, setUser] = useState({ firstname: '', lastname: '', username: '', password: '' });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const loginPage = useNavigate();
  const submit = () => {
    if (user.firstname && user.lastname && user.username && user.password !== '') {
      props.getData(user)
      loginPage('/')
    }
    else {
      alert('Please Fill Out All the Fields')
    }
  }
  return (
    <div className='form-container'>
      <input type="text" name="firstname" value={user.firstname} placeholder='First Name' onChange={handleChange} />
      <input type="text" name='lastname' value={user.lastname} placeholder='Last Name' onChange={handleChange} />
      <input type="text" name="username" value={user.username} placeholder='User Name' onChange={handleChange} />
      <input type="password" name='password' value={user.password} placeholder='Password' onChange={handleChange} />
      <button className='submit-btn' onClick={submit}>Signup</button>
    </div>
  )
}

export default Signup
